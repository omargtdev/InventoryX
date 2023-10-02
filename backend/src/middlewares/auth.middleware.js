import statusCodes from "../config/status-codes.js";
import jwtService from "../services/jwt.service.js";

const PATHS_TO_IGNORE = [
	"/",
	"/auth/login"
]

const messages = {
	UNAUTHORIZED: "Unauthorized.",
	INVALID_SCHEME: "Invalid authorization scheme."
}

const validateJwt = async (req, res, next) => {
	if(PATHS_TO_IGNORE.includes(req.url))
		return next();

	const { authorization } = req.headers;
	if(!authorization)
		return res.status(statusCodes.UNAUTHORIZED).json({ message: messages.UNAUTHORIZED });

	const [scheme, token] = authorization.split(" ");
	
	if(scheme !== "Bearer")
		return res.status(statusCodes.UNAUTHORIZED).json({ message: messages.INVALID_SCHEME })

	try {
		await jwtService.validateToken(token);
	} catch (errorMessage) {
		return res.status(statusCodes.UNAUTHORIZED).json({ message: errorMessage });
		
	}
	


	next();
}

export default {
	validateJwt
}
