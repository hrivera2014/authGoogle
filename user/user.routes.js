
import express from “express”;

//import {homePage, userLogin,userlogout,userRegisteration,updateUserPassword,getUserLogin, get}
import { auth ) from "Hi/uL/middlevares/FwtAuth wi ddleware 55" ;

const router = express.Router();

router.route("/login").post(userLogin);

router.route("/register").post (userRegisteration);

router. route("/logout") .get(userLogout) ;

// router.route("/update/password”).post(auth, updateUserPassword);

router. route("/home") .get(auth, homePage) ;


router.route("/update/profile").post(auth, updateUserProfile);

/1 router.route("/update/password") .post (auth, updateUserPassword);
router. route(" hone") ek (auth, hosePage)s |
router.route("/register”).get(getUserRegistration);

router. route("/login") .get (getUserLogin);

/1 router.route("/home") .get (usertome);

export default router;

//needs testing update/profile
