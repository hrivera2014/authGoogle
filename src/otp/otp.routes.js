import express from “express”;

import { sendOTP,verifyOTP,get0TPView } from "../otp/otp.controller.js”;
//create a express router abject

const router = express.Router();

router.route("/").get(getOTPView) ;

router.route("/").post(sendoTP);
router.route("/verify-otp/:email”).post (verifyOTP);

export default router;
