// TODO: Sidebar and navbar here

import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Side/Side";

const Dashboard = () => {
	return (
		<>
			<Sidebar />

			<Outlet />
		</>
	);
};

export default Dashboard;
