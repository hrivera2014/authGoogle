import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";
// import { customErrorHandler } from ",./../middlewares/errorHandler.js";
import {compareHashedPassword} from "../../utils/hashPassword.js"
import berypt from "bcrypt"
const UserModel = mongoose.model("User", userSchema) ;
export const userRegisterationRepo = async (userData) => {
  try {
    const newUser = new UserModel(userData) ;
    await newUser.save();
    return { success: true, res: newUser };
  } catch (error) {
  return { success: false, error: { statusCode: 400, msg: error } };
  }
};

export const userLoginRepo = async (userData) => {
  try {
    const { email, password } = userData;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return {
        success: false,
        error: { statusCode: 404, msg: "user not found” }
    } else {
      console.log(user.password)
      let passwordValidation = await compareHashedPassword(
        password,
        user.password
      )
    }
  
  (passwordValidation) {

    if (passwordValidation) {
      return { success: true, res: user };
      } else {
      return {
      success: false,
      error: { statusCode: 400, msg: "invalid credentials” },
    
        export const updateUserPasswordRepo = async (email, newpassword, next) => {
          try {
          const user = await UserModel.findOne({ email });
          if (luser) {
          return {
          success: false,
          error: { statusCode: 404, msg: “user not found" },
          5
          } else {
          const newHashedPassword = await bcrypt.hash(newpassword, 12);
          user.password = newHashedPassword;
          let updatedUser = await user.save();
          return { success: true, msg: "Password updated successfully!” };
          }
          } catch (error) {
          return {
          success: false,
          error: { statusCode: 400, msg: error },
          