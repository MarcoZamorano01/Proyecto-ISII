import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaUsers,
    FaClipboardList,
    FaChartBar,
    FaRobot,
    FaUserGraduate,
    FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {

    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    const adminMenu = [
        {
            path: "/dashboard",
            label: "Dashboard",
            icon: <FaChartBar />
        },
        {
            path: "/users",
            label: "Usuarios",
            icon: <FaUsers />
        },
        {
            path: "/questions",
            label: "Preguntas",
            icon: <FaClipboardList />
        },
        {
            path: "/results",
            label: "Resultados",
            icon: <FaChartBar />
        }
    ];

    const studentMenu = [
        {
            path: "/home",
            label: "Inicio",
            icon: <FaHome />
        },
        {
            path: "/test",
            label: "Test Vocacional",
            icon: <FaUserGraduate />
        },
        {
            path: "/my-results",
            label: "Mis Resultados",
            icon: <FaChartBar />
        },
        {
            path: "/advisor",
            label: "Orientador IA",
            icon: <FaRobot />
        }
    ];

    const menu =
        role === "Admin"
            ? adminMenu
            : studentMenu;

    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    return (
        <aside className="sidebar">

            <div className="sidebar-header">

                <div className="sidebar-logo">
                    🎓
                </div>

                <h2>
                    Vocational Guidance
                </h2>

                <span>
                    {name}
                </span>

            </div>

            <nav className="sidebar-menu">

                {menu.map(item => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "nav-item active"
                                : "nav-item"
                        }
                    >
                        {item.icon}

                        <span>
                            {item.label}
                        </span>

                    </NavLink>

                ))}

            </nav>

            <div className="sidebar-footer">

                <button
                    onClick={logout}
                    className="logout-btn"
                >
                    <FaSignOutAlt />

                    <span>
                        Cerrar Sesión
                    </span>

                </button>

            </div>

        </aside>
    );
}

export default Sidebar;