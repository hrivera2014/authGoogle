import mongoose from "mongoose";
export const userSchema = new mongoose. Schema({
  email: {
    type: String,
    unique: true,
    required: [true,"Email is required"],
    match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/],
  },
  password: {type: String},
  googleId: {type: String,},
  accessToken: {type: String}
})