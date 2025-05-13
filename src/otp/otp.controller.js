import mongoose from ‘mongoose’;

import otpGenerator from 'otp-generator';

import { otpSchema } from . /otp.schema.js';

import { userSchema } from °../user/user.schema.js’;

import sendEmail from '../../utils/mailSender.js';

import { verifyOTPRepo } from './otp.repository.js';

import { updateUserPassword } from '../user/user.controller.js';
const OTPHodel = mongoose.model("0TP" , otpSchema);

const UserModel = mongoose.model("User®, userSchema) ;


async function sendVerificationEmail(email, otp) {
  try {
  const mailResponse = await sendEmail(
  email,
  "MyAuthSystem | Password Reset Request”,
  “<h1>Please confirm your OTP</h1>
  <p>Here is your OTP code: ${otp}</p>~
  b4
  console.log(“Email sent successfully: ", mailResponse);
  } catch (error)
  console.log("Error occurred while sending email: *, error);
  ® | throw error;
  }

  export const verifyOTP = async(req,res,next)=>{
    const {otp,newPassword } = req.body;
    Const email = req.params.email;
    const resp = await verifyOTPRepo(email,otp);
    if(lresp.success){
    return res.render("user-otp-verification”,{email:email,userEmail:req.enail, error:resp.me
    ¥
    const result = await updateUserPassword(email,newPassword,next);
    if(result.success){
    return res.render("user-login", {userfmail:req.email, error:result.msg});
    Jelse(
    return res.render("user-otp-verification”, {email:email,userEmail:req.enail, error:result.
    }
    
    import const getOTPView= (req,res)=>{
     res.renderf("user-otp-verification”, {email:null,userEmail:req.email,error:null};
    }