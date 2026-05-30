import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "../components/Navbar";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Questions from "../pages/Questions";
import Tests from "../pages/Tests";
import Results from "../pages/Results";
import VocationalTest from "../pages/VocationalTest";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/users"
                    element={<Users />}
                />

                <Route
                    path="/questions"
                    element={<Questions />}
                />

                <Route
                    path="/tests"
                    element={<Tests />}
                />

                <Route
                    path="/results"
                    element={<Results />}
                />

                <Route
                    path="/vocational-test"
                    element={<VocationalTest />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default AppRoutes;