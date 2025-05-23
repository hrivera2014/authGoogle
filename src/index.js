//import dotenv from "dotenv"
//dotenv.config()
import cookieParser from "cookie-parser"
import express from "express"
//import ejsLayouts from "express-ejs-layouts"
import path from "node:path"
import passport from "passport"
import session from "express-session"
import jwt from "jsonwebtoken"
import { googlePassportConfig } from "./src/config/passport-google.js"
import userRouter from "./src/features/user/user.routes.js"
import otpRouter from "./src/features/otp/otp.routes.js"
const app = express();

app.set("view engine","ejs")
app.set("views",path.join(path.resolve("src/public", "views"))

// for below to work have a layout.ejs in views
//app.use(ejsLayouts);

app.use(session({
  //secret: process.env.SESSION_SECRET,
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
googlePassportConfig(passport);
app.get("/", (req,res)=>{
//check if loged in
return res.render("user-login", {userfmail:req.email, error:null});

app.get(google.passport.authenticate("google", { scope: ["profile", "email"] }));
// Google authentication callback route
app.get("/auth/google/callback", 
passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
  //Nt ati e straictinse Ot realoltart B snderctanrss hettit
 "auth/google/callback",
passport.authenticate("google", { failureRedirect: "/login" }),
(req, res) => {
//see the structure of req object to understaand better
const payload = {_id: req.user._id, email: req.user.email,accessToken:req.user.accessToken
//jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
jwt.sign(payload, "secret", { expiresIn: "1h" }, (err, token) => {
	if (err) throw err;
	res.cookie(jutToken, token, { httpOnly: true });
	res.redirect("/user/home");
	}
})
app.use("/user", userRouter);
app.use("/otp",otpRouter);

export default app;
