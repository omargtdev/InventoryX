import React from "react";
import Login from "./Login/Login";
import { LoginUseProvider } from "../context/login/LoginUseProvider";

const Home = () => {
	return (
		<>
			<LoginUseProvider>
				<Login />
			</LoginUseProvider>
		</>
	);
};

export default Home;
