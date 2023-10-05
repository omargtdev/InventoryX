import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/index";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);
