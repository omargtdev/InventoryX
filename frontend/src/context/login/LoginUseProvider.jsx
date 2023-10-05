import { useState } from "react";
import { LoginUseContext } from "./LoginUseContext";

export const LoginUseProvider = ({ children }) => {
	const [isSignup, setIsSignup] = useState(false);

	const toggleForm = () => {
		setIsSignup(!isSignup);
	};

	return (
		<LoginUseContext.Provider
			value={{
				isSignup,
				toggleForm,
			}}
		>
			{children}
		</LoginUseContext.Provider>
	);
};
