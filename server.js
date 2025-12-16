import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import webhookRoutes from "./routers/webhook.routes.js";
import serviceRoutes from "./routers/router.js";
import { connectDB } from "./db/connectDb.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/webhook", webhookRoutes);
app.use("/", serviceRoutes);

app.get("/", (req, res) => {
  res.json({ status: "WhatsApp API Live" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
