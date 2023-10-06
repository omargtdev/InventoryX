// TODO: Sidebar and navbar here

import { Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<>
			<h1>Dashboard</h1>
			<h3>Sidebar</h3>

			<Outlet />
		</>
	);
};

export default Dashboard;
