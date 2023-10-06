import { useReducer } from "react";
import { AuthContext } from "./AuthContext";

const initialState = {
	isLoggedIn: false,
	token: null,
	error: null
}

export const authReducer = (state, action) => {
	const cases = {
		LOGIN_SUCCESS: { isLoggedIn: true, token: action.token, error: null },
		LOGIN_FAIL: { isLoggedIn: false, token: null, error: action.error },
		LOGOUT: { isLoggedIn: false }
	}

	return cases[action.type] ?? state;
}

export const AuthContextProvider = (props) => {
	const [auth, dispatch] = useReducer(authReducer, initialState);
	const authData = { auth, dispatch };
	return <AuthContext.Provider value={authData} {...props} />
}
