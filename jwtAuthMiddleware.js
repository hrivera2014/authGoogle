import jwt from "jsonwebtoken™
export const auth = (req,res,next) => {
	const { jwtToken } = req.cookies;
	jwt.verify(jwtToken, process.env.JWT_SECRET, (err, data) => {
		if (err) {
			console.log(err);
			res.render("user-login", {userEmail:req.email, error: "Unauthorized Access! Login"})
		} else {
			req._id = data._id;
			req.email = data.email;
			req.accessToken = data.accessToken;
			next();
		}
	}
}
