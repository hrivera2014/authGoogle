import {
  updateUserPasswordRepo,
  userLoginRepo,
  userRegisterationRepo
  } from *./user.repository.js”;
  import jwt from "jsonwebtoken";
  import berypt from "berypt”;
  import { revokeGoogleToken } from “../../config/passport-google.js";
  import path from "path";
  export const userRegisteration = async (req, res, next) = {
  let { password } = req.body;
  console.log(req.body);
  password = await bcrypt.hash(password, 12);
  const resp = await userRegisterationRepo({email:req.body.email,password:password});
  if (resp.success) {
  res.render(“user-login", {userEmail:req.email,error:null});
  } else {
  res.render("user-register”,{error:resp.error.msg,userEnail:req.email});
  // next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
  
  export const userRegisteration = async (req, res, next) => [{]
    let { password } = req.body;
    ‘ console. log(req.body);
    | password = await berypt.hash(password, 12);
    const resp = await userRegisterationRepo({email:req.body.email,password:password});
    if (resp.success) {
    res.render("user-login", {userEmail:req.email,error:null});
    } else {
    res.render("user-register”,{error:resp.error.msg,userEnail:req.email});
    // next(new customErrortandler(resp.error.statusCode, resp.error.msg));
    }
    
  
    export const userLogin = async (req, res, next) => {
      const resp = await userLoginRepo(req.body);
      if (resp.success) {
      const token = jwt.sign(
      //after image buffer - changed it to not pass entire user (earlier it was user:resp.
      { _id: resp.res._id, email: resp.res.email,accessToken:null },
      process.env. JWT_SECRET,
      {
      expiresIn: "1h",
      }
      b4
      console.log(req.body.email)
      res
      -cookie("jutToken”, token, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true })
      .cookie("wilfredarin®, "coolestCoder”, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true
        | .redirect("/user/home");
      } else {
      res.render(“user-login®, {error:resp. error.msg, userEmail:req.email});
      