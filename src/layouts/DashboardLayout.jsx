import {
    Outlet
}
from "react-router-dom";

import Sidebar
from "../components/layout/Sidebar";

import "./DashboardLayout.css";

function DashboardLayout() {

    return (

        <div className="layout">

            <Sidebar />

            <main
                className="content"
            >

                <Outlet />

            </main>

        </div>
    );
}

export default DashboardLayout;