import express from "express";
import {
  verifyWebhook,
  receiveWebhook,
} from "../Controllers/webhook.controller.js";

const router = express.Router();
router.get("/", verifyWebhook);
router.post("/", receiveWebhook);

export default router;
