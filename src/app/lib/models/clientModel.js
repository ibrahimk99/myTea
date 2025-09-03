import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: String,
  phone: String,
});
export const Client =
  mongoose.models.Client || mongoose.model("Client", clientSchema);
