const PATHS_TO_IGNORE = [
	"/",
	"/auth/login"
]


const validateJwt = (req, res, next) => {
	if(PATHS_TO_IGNORE.includes(req.url))
		return next();

	// TODO: Add logic
}

export default {
	validateJwt
}
