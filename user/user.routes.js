import express from “express”
import {
	homePage, 
	userLogin, 
	userlogout, 
	userRegisteration, 
	updateUserPassword, 
	getUserLogin, get}
from ""

import { auth } from "./middlevares"
const router = express.Router()
router.route("/login").post(userLogin)
router.route("/register").post(userRegisteration)
router.route("/logout").get(userLogout)
// router.route("/update/password”).post(auth, updateUserPassword);
router.route("/home").get(auth, homePage)
router.route("/update/profile").post(auth, updateUserProfile)
router.route("/update/password").post(auth, updateUserPassword)
router.route(" hone").get(auth, hosePage)
router.route("/register”).get(getUserRegistration)
router. route("/login").get(getUserLogin)
router.route("/home").get(usertome);

export default router

//needs testing update/profile
