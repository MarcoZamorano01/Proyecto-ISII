import {
    Navigate
}
from "react-router-dom";

function StudentRoute({
    children
}) {

    const role =
        localStorage.getItem(
            "role"
        );

    if (role !== "Student") {

        return (
            <Navigate
                to="/dashboard"
            />
        );
    }

    return children;
}

export default StudentRoute;