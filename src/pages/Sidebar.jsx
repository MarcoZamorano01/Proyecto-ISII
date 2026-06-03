import {
    FaHome,
    FaUserGraduate,
    FaClipboardList
} from "react-icons/fa";

import {
    Link
} from "react-router-dom";

function Sidebar() {

    return (

        <aside
            className="sidebar"
        >

            <h2>
                Vocational AI
            </h2>

            <Link to="/">

                <FaHome />
                Dashboard

            </Link>

            <Link to="/test">

                <FaClipboardList />
                Test

            </Link>

            <Link to="/users">

                <FaUserGraduate />
                Usuarios

            </Link>

        </aside>
    );
}

export default Sidebar;