import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/index";
import Home from "../pages/Home/Home";
import User from "../pages/Home/Navpages/User";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/Home",
		element: <Home />,
	},
	{},
]);
