import {
  handleUserMessage,
  handleButtonClick,
  handleFormFlow,
  userSessions,
} from "./whatsappCon.js";

/**
 * WEBHOOK VERIFICATION (GET)
 */
export const verifyWebhook = (req, res) => {
  console.log("✅ VERIFY WEBHOOK HIT");

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
    console.log("✅ WEBHOOK VERIFIED");
    return res.status(200).send(challenge);
  }

  console.log("❌ WEBHOOK VERIFY FAILED");
  return res.sendStatus(403);
};

/**
 * RECEIVE WHATSAPP MESSAGES (POST)
 */
export const receiveWebhook = async (req, res) => {
  console.log("🚨🚨🚨 WHATSAPP WEBHOOK HIT 🚨🚨🚨");
  console.log(JSON.stringify(req.body, null, 2));

  try {
    const entry = req.body?.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;

    if (!value) {
      console.log("⚠️ No value object");
      return res.sendStatus(200);
    }

    const messages = value.messages;
    if (!messages || !messages.length) {
      console.log("ℹ️ No messages (status update)");
      return res.sendStatus(200);
    }

    const msg = messages[0];
    console.log("✅ MESSAGE:", msg);

    const from = msg.from;
    console.log("📞 FROM:", from);
    console.log("📨 TYPE:", msg.type);

    if (msg.type === "text") {
      console.log("📝 TEXT:", msg.text.body);
      await handleUserMessage(from, msg.text.body);
    }

    else if (msg.type === "interactive") {
      const title =
        msg.interactive?.list_reply?.title ||
        msg.interactive?.button_reply?.title;

      console.log("🧩 INTERACTIVE:", title);
      await handleButtonClick(from, title);
    }

    else if (msg.type === "location") {
      console.log("📍 LOCATION:", msg.location);

      if (!userSessions[from]) {
        userSessions[from] = { step: 7, data: {} };
      }

      userSessions[from].data.location = msg.location;
      await handleFormFlow(from, "__LOCATION_RECEIVED__");
    }

  } catch (err) {
    console.error("❌ WEBHOOK ERROR:", err);
  }

  return res.sendStatus(200);
};
