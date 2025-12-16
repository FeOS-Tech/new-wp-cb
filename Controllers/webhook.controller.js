// import {
//   handleUserMessage,
//   handleButtonClick,
// } from "./whatsapp.controller.js";

// export const verifyWebhook = (req, res) => {
//   const { "hub.verify_token": token, "hub.challenge": challenge } = req.query;
//   if (token === process.env.VERIFY_TOKEN) return res.send(challenge);
//   res.sendStatus(403);
// };

// export const receiveWebhook = async (req, res) => {
//   const msg =
//     req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

//   if (!msg) return res.sendStatus(200);

//   const from = msg.from;

//   if (msg.type === "text") {
//     await handleUserMessage(from, msg.text.body);
//   }

//   if (msg.type === "interactive") {
//     const id =
//       msg.interactive.list_reply?.id ||
//       msg.interactive.button_reply?.id;
//     await handleButtonClick(from, id);
//   }

//   res.sendStatus(200);
// // };
// import {
//   handleUserMessage,
//   handleButtonClick,
//   handleFormFlow,
//   userSessions,
// } from "./whatsappCon.js";

// // export const verifyWebhook = (req, res) => {
// //   if (req.query["hub.verify_token"] === process.env.VERIFY_TOKEN) {
// //     return res.send(req.query["hub.challenge"]);
// //   }
// //   res.sendStatus(403);
// // };
// export const verifyWebhook = (req, res) => {
//   const mode = req.query["hub.mode"];
//   const token = req.query["hub.verify_token"];
//   const challenge = req.query["hub.challenge"];

//   if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
//     return res.status(200).send(challenge);
//     console.log("webhook verified")
//   }

//   return res.sendStatus(403);
// };


// export const receiveWebhook = async (req, res) => {
//   const msg =
//     req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

//   if (!msg) return res.sendStatus(200);

//   const from = msg.from;

//   if (msg.type === "text") {
//     await handleUserMessage(from, msg.text.body);
//   } else if (msg.type === "interactive") {
//     const id =
//       msg.interactive.list_reply?.id ||
//       msg.interactive.button_reply?.id;
//     await handleButtonClick(from, id);
//   } else if (msg.type === "location") {
//     userSessions[from].data.location = msg.location;
//     await handleFormFlow(from, "__LOCATION_RECEIVED__");
//   }

//   res.sendStatus(200);
// };
export const verifyWebhook = (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
    console.log("✅ webhook verified");
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
};

// export const receiveWebhook = async (req, res) => {
//   const msg = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
// console.log("🔥 POST WEBHOOK HIT");

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

//     if (msg.interactive.type === "button_reply") {
//       const id = msg.interactive.button_reply.id;
//       await handleButtonClick(from, id);
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
// // };
import {
  handleUserMessage,
  handleButtonClick,
  handleFormFlow,
  userSessions
} from "./whatsappCon.js";

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

//     if (msg.interactive.type === "button_reply") {
//       const id = msg.interactive.button_reply.id;
//       await handleButtonClick(from, id);
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
export const receiveWebhook = async (req, res) => {
  console.log("🔥 POST WEBHOOK HIT");

  if (!req.body || !req.body.entry) {
    return res.sendStatus(200);
  }

  const msg = req.body.entry[0]?.changes?.[0]?.value?.messages?.[0];
  if (!msg) return res.sendStatus(200);

  const from = msg.from;

  if (msg.type === "text") {
    await handleUserMessage(from, msg.text.body);
  }

  else if (msg.type === "interactive") {
    if (msg.interactive.type === "list_reply") {
      const title = msg.interactive.list_reply.title;
      await handleButtonClick(from, title);
    }
  }

  else if (msg.type === "location") {
    if (!userSessions[from]) {
      userSessions[from] = { step: 7, data: {} };
    }

    userSessions[from].data.location = msg.location;
    await handleFormFlow(from, "__LOCATION_RECEIVED__");
  }

  return res.sendStatus(200);
};
