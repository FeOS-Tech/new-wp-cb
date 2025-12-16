import mongoose from "mongoose";

const srBookingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    brandName: String,
    modelName: String,
    issueType: String,
    slot: String,
    location: {
      latitude: Number,
      longitude: Number,
      name: String,
      address: String,
    },
    userNumber: String,
  },
  { timestamps: true }
);

export const SrBooking = mongoose.model("SrBooking", srBookingSchema);
