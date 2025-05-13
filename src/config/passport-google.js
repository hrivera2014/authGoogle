import mongoose from “"mongoose”
import passport from "passport"
import { userSchema } from "../features/user/user.schema.js"
import { Strategy as GoogleStrategy } from 'passport-google-oauth20’
import axios from "axios"
const UserModel = mongoose.model("User”, userSchema)

export const revokeGoogleToken = async (accessToken) => {
	try {
		await axios.post("https://cauth2.googleapis.com/revoke", null, 
		{ params: {token: accessToken}}
		console.log('Google access token revoked successfully')
	} catch (error) {
		console.error('Error revoking Google access token:', error.response.data)
	}	
}

export const googlePassportConfig = function(passport) {
    passport.use(new GoogleStrategy({
    // clientID: process.env.GOOGLE_CLIENT_ID,
    clientID: process.env.G00GLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE CLIENT SECRET,
    callbackURL: "/auth/google/callback",
    async (accessToken, refreshToken, profile, done) => {
    let user = await UserModel.findone({ googleld: profile.id });
    if (!user) {
    user = new UserModel ({
    	googleld: profile.id,
    	email: profile.emails[0].value,
    	accessToken: accessToken
			})
    await user.save();
    	done(null, user);
    	} catch (error) {
    		done(error, null);
    } catch (error) {
			done(error, null);
		}
)}
}}

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findByld(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
})
