import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard";
import Welcome from "../pages/Welcome";

import { LoginUseProvider } from "../context/login/LoginUseProvider";
import { AuthContextProvider } from "../context/auth/AuthContextProvider";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: (
			<LoginUseProvider>
				{" "}
				<Login />{" "}
			</LoginUseProvider>
		),
	},
	{
		path: "/",
		element: (
			<AuthContextProvider>
				{" "}
				<Dashboard />{" "}
			</AuthContextProvider>
		),
		children: [
			{
				index: true,
				element: <Welcome />,
			},
		],
	},
]);
