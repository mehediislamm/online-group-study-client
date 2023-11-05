import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AdminLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;