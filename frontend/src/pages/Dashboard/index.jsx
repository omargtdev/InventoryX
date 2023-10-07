// TODO: Sidebar and navbar here

import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Side/Side";

const Dashboard = () => {
	return (
		<>
			<h1>Dashboard</h1>
			<Sidebar />

			<Outlet />
		</>
	);
};

export default Dashboard;
