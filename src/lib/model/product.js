import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  phone: Number,
  address: String,
});

export const Product =
  mongoose.models.users || mongoose.model("users", productSchema);
