// // import {
// //   handleUserMessage,
// //   handleButtonClick,
// // } from "./whatsapp.controller.js";

// // export const verifyWebhook = (req, res) => {
// //   const { "hub.verify_token": token, "hub.challenge": challenge } = req.query;
// //   if (token === process.env.VERIFY_TOKEN) return res.send(challenge);
// //   res.sendStatus(403);
// // };

// // export const receiveWebhook = async (req, res) => {
// //   const msg =
// //     req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

// //   if (!msg) return res.sendStatus(200);

// //   const from = msg.from;

// //   if (msg.type === "text") {
// //     await handleUserMessage(from, msg.text.body);
// //   }

// //   if (msg.type === "interactive") {
// //     const id =
// //       msg.interactive.list_reply?.id ||
// //       msg.interactive.button_reply?.id;
// //     await handleButtonClick(from, id);
// //   }

// //   res.sendStatus(200);
// // // };
// // import {
// //   handleUserMessage,
// //   handleButtonClick,
// //   handleFormFlow,
// //   userSessions,
// // } from "./whatsappCon.js";

// // // export const verifyWebhook = (req, res) => {
// // //   if (req.query["hub.verify_token"] === process.env.VERIFY_TOKEN) {
// // //     return res.send(req.query["hub.challenge"]);
// // //   }
// // //   res.sendStatus(403);
// // // };
// // export const verifyWebhook = (req, res) => {
// //   const mode = req.query["hub.mode"];
// //   const token = req.query["hub.verify_token"];
// //   const challenge = req.query["hub.challenge"];

// //   if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
// //     return res.status(200).send(challenge);
// //     console.log("webhook verified")
// //   }

// //   return res.sendStatus(403);
// // };


// // export const receiveWebhook = async (req, res) => {
// //   const msg =
// //     req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

// //   if (!msg) return res.sendStatus(200);

// //   const from = msg.from;

// //   if (msg.type === "text") {
// //     await handleUserMessage(from, msg.text.body);
// //   } else if (msg.type === "interactive") {
// //     const id =
// //       msg.interactive.list_reply?.id ||
// //       msg.interactive.button_reply?.id;
// //     await handleButtonClick(from, id);
// //   } else if (msg.type === "location") {
// //     userSessions[from].data.location = msg.location;
// //     await handleFormFlow(from, "__LOCATION_RECEIVED__");
// //   }

// //   res.sendStatus(200);
// // };
// export const verifyWebhook = (req, res) => {
//   const mode = req.query["hub.mode"];
//   const token = req.query["hub.verify_token"];
//   const challenge = req.query["hub.challenge"];

//   if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
//     console.log("✅ webhook verified");
//     return res.status(200).send(challenge);
//   }

//   return res.sendStatus(403);
// };

// // export const receiveWebhook = async (req, res) => {
// //   const msg = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
// // console.log("🔥 POST WEBHOOK HIT");

// //   if (!msg) return res.sendStatus(200);

// //   const from = msg.from;

// //   if (msg.type === "text") {
// //     await handleUserMessage(from, msg.text.body);
// //   }

// //   else if (msg.type === "interactive") {

// //     if (msg.interactive.type === "list_reply") {
// //       const title = msg.interactive.list_reply.title;
// //       await handleButtonClick(from, title);
// //     }

// //     if (msg.interactive.type === "button_reply") {
// //       const id = msg.interactive.button_reply.id;
// //       await handleButtonClick(from, id);
// //     }
// //   }

// //   else if (msg.type === "location") {

// //     if (!userSessions[from]) {
// //       userSessions[from] = { step: 7, data: {} };
// //     }

// //     userSessions[from].data.location = msg.location;
// //     await handleFormFlow(from, "__LOCATION_RECEIVED__");
// //   }

// //   return res.sendStatus(200);
// // // };
// import {
//   handleUserMessage,
//   handleButtonClick,
//   handleFormFlow,
//   userSessions
// } from "./whatsappCon.js";

// // export const receiveWebhook = async (req, res) => {
// //   console.log("🔥 POST WEBHOOK HIT");

// //   if (!req.body || !req.body.entry) {
// //     return res.sendStatus(200);
// //   }

// //   const msg = req.body.entry[0]?.changes?.[0]?.value?.messages?.[0];
// //   if (!msg) return res.sendStatus(200);

// //   const from = msg.from;

// //   if (msg.type === "text") {
// //     await handleUserMessage(from, msg.text.body);
// //   }

// //   else if (msg.type === "interactive") {

// //     if (msg.interactive.type === "list_reply") {
// //       const title = msg.interactive.list_reply.title;
// //       await handleButtonClick(from, title);
// //     }

// //     if (msg.interactive.type === "button_reply") {
// //       const id = msg.interactive.button_reply.id;
// //       await handleButtonClick(from, id);
// //     }
// //   }

// //   else if (msg.type === "location") {

// //     if (!userSessions[from]) {
// //       userSessions[from] = { step: 7, data: {} };
// //     }

// //     userSessions[from].data.location = msg.location;
// //     await handleFormFlow(from, "__LOCATION_RECEIVED__");
// //   }

// //   return res.sendStatus(200);
// // };
// export const receiveWebhook = async (req, res) => {
//   console.log("🔥 POST WEBHOOK HIT");

//   if (!req.body || !req.body.entry) {
//     return res.sendStatus(200);
//   }

//   const msg = req.body.entry[0]?.changes?.[0]?.value?.messages?.[0];
//   if (!msg) return res.sendStatus(200);

//   const from = msg.from;

//   if (msg.type === "text") {
//     await handleUserMessage(from, msg.text.body);
//   }

//   else if (msg.type === "interactive") {
//     if (msg.interactive.type === "list_reply") {
//       const title = msg.interactive.list_reply.title;
//       await handleButtonClick(from, title);
//     }
//   }

//   else if (msg.type === "location") {
//     if (!userSessions[from]) {
//       userSessions[from] = { step: 7, data: {} };
//     }

//     userSessions[from].data.location = msg.location;
//     await handleFormFlow(from, "__LOCATION_RECEIVED__");
//   }

//   return res.sendStatus(200);
// };
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

  console.log("VERIFY PARAMS:", { mode, token, challenge });

  if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
    console.log("✅ WEBHOOK VERIFIED SUCCESSFULLY");
    return res.status(200).send(challenge);
  }

  console.log("❌ WEBHOOK VERIFICATION FAILED");
  return res.sendStatus(403);
};

/**
 * RECEIVE WEBHOOK (POST)
 */
export const receiveWebhook = async (req, res) => {
  // 🔥 THIS LOG MUST ALWAYS PRINT
  console.log("🔥🔥🔥 WEBHOOK POST HIT 🔥🔥🔥");

  // 🔍 log full body
  console.log("BODY RECEIVED:", JSON.stringify(req.body, null, 2));

  try {
    const msg =
      req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

    if (!msg) {
      console.log("⚠️ NO MESSAGE OBJECT FOUND");
      return res.sendStatus(200);
    }

    console.log("✅ MESSAGE OBJECT:", msg);

    const from = msg.from;
    console.log("📞 FROM:", from);
    console.log("📨 TYPE:", msg.type);

    if (msg.type === "text") {
      console.log("📝 TEXT MESSAGE:", msg.text.body);
      await handleUserMessage(from, msg.text.body);
    }

    else if (msg.type === "interactive") {
      console.log("🧩 INTERACTIVE MESSAGE:", msg.interactive);

      const id =
        msg.interactive.list_reply?.title ||
        msg.interactive.button_reply?.id;

      console.log("🆔 INTERACTION ID:", id);
      await handleButtonClick(from, id);
    }

    else if (msg.type === "location") {
      console.log("📍 LOCATION RECEIVED:", msg.location);

      if (!userSessions[from]) {
        userSessions[from] = { step: 7, data: {} };
      }

      userSessions[from].data.location = msg.location;
      await handleFormFlow(from, "__LOCATION_RECEIVED__");
    }

    return res.sendStatus(200);
  } catch (error) {
    console.error("❌ ERROR IN WEBHOOK:", error);
    return res.sendStatus(500);
  }
};
