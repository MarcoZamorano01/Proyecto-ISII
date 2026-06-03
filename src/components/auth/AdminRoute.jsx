import {
    Navigate
}
from "react-router-dom";

function AdminRoute({
    children
}) {

    const role =
        localStorage.getItem(
            "role"
        );

    if (role !== "Admin") {

        return (
            <Navigate
                to="/home"
            />
        );
    }

    return children;
}

export default AdminRoute;