import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fullNames: String,
  password: { type: String, required: true },
  phoneNumber: String,
  location: String,
});

export const User = mongoose.model("User", userSchema);
