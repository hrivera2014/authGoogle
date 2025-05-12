import mongoose from “"mongoose”;
import passport from ‘passport’;
import {userSchema} from '../features/user/user.schema.js’;
const UserModel = mongoose.model("User”, userSchema);
import { Strategy as GoogleStrategy } from 'passport-google-cauth20’;
import axios from ‘axios';
export const revokeGoogleToken = async (accessToken) => {
try {
await axios.post("https://cauth2.googleapis.com/revoke’, null, {
params: {
token: accessToken,
i
s
console.log('Google access token revoked successfully');
} catch (error) {
console.error('Error revoking Google access token:', error.response.data);
E;
b
export const googlePassportConfig = function(passport){

  export const]googlePassportConfig = | [function(passport){
    passport..use(new GoogleStrategy({
    // clientID: process.env.GOOGLE_CLIENT_ID,
    clientID: “${process.env.G00GLE_CLIENT_ID}",
    clientSecret: process.env.GOOGLE CLIENT SECRET,
    callbackURL: */auth/google/callback’,
    b
    async (accessToken, refreshToken, profile, done) => {
    oy
    let user = await UserModel.findone({ googleld: profile.id });
    if (luser) {
    user = new Userhodel ({
    googleld: profile.id,
    email: profile.emails[0].value,
    accessToken: accessToken
    s
    await user.save();
    ¥
    done(null, user);
    } catch (error) {
    done(error, null);
    } catch (error) {
done(error, null);
}

passport.serializeUser((user, done) => {
  done(null, user.id);
  }
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findByld(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
})