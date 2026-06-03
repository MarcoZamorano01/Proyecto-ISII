import {
    Navigate
}
from "react-router-dom";

import {
    getRole,
    getToken
}
from "../services/authService";

function ProtectedRoute({
    children,
    allowedRole
}) {

    const token =
        getToken();

    const role =
        getRole();

    if (!token) {

        return (
            <Navigate
                to="/login"
            />
        );
    }

    if (
        allowedRole &&
        role !== allowedRole
    ) {

        return (
            <Navigate
                to="/login"
            />
        );
    }

    return children;
}

export default ProtectedRoute;