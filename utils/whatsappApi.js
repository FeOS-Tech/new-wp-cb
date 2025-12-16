import axios from "axios";

const { ACCESS_TOKEN, PHONE_NUMBER_ID } = process.env;

export const sendWhatsApp = async (payload) => {
  return axios.post(
    `https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
};
