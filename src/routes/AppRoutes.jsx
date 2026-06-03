import {
    Routes,
    Route,
    Navigate
}
    from "react-router-dom";

import LoginPage
    from "../pages/auth/LoginPage";

import RegisterPage
    from "../pages/auth/RegisterPage";

import DashboardPage
    from "../pages/dashboard/DashboardPage";

import UsersPage
    from "../pages/users/UsersPage";

import QuestionsPage
    from "../pages/questions/QuestionsPage";

import ResultsPage
    from "../pages/results/ResultsPage";

import ProfilePage
    from "../pages/profile/ProfilePage";

import VocationalTestPage
    from "../pages/vocational/VocationalTestPage";

import HomePage
    from "../pages/student/HomePage";

import MyResultsPage
    from "../pages/student/studentResultsPage";

import AIChatPage
from "../pages/ai/AIChatPage";

import DashboardLayout
    from "../layouts/DashboardLayout";

import ProtectedRoute
    from "../components/layout/ProtectedRoute";

import AdminRoute
    from "../components/auth/AdminRoute";

import StudentRoute
    from "../components/auth/StudentRoute";


function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/"
                element={
                    <Navigate
                        to="/login"
                    />
                }
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />

            <Route
                path="/register"
                element={<RegisterPage />}
            />

            {/* ADMIN */}

            <Route
                element={
                    <ProtectedRoute
                        allowedRole="Admin"
                    >
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >

                <Route
                    path="/dashboard"
                    element={

                        <AdminRoute>

                            <DashboardPage />

                        </AdminRoute>

                    }
                />

                <Route
                    path="/users"
                    element={
                        <AdminRoute>

                            <UsersPage />

                        </AdminRoute>
                    }
                />

                <Route
                    path="/questions"
                    element={
                        <AdminRoute>
                            <QuestionsPage />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/results"
                    element={
                        <AdminRoute>
                            <ResultsPage />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <AdminRoute>
                            <ProfilePage />
                        </AdminRoute>}
                />

            </Route>

            {/* STUDENT */}

            <Route
                element={
                    <ProtectedRoute
                        allowedRole="Student"
                    >
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >

                <Route
                    path="/home"
                    element={
                        <StudentRoute>

                            <HomePage />

                        </StudentRoute>
                    }
                />

                <Route
                    path="/test"
                    element={
                        <StudentRoute>
                            <VocationalTestPage />
                        </StudentRoute>
                    }
                />

                <Route
                    path="/my-results"
                    element={
                        <StudentRoute>
                            <MyResultsPage />
                        </StudentRoute>
                    }
                />

                <Route
                    path="/advisor"
                    element={
                        <StudentRoute>
                            <AIChatPage />
                        </StudentRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <StudentRoute>
                            <ProfilePage />
                        </StudentRoute>
                    }
                />

            </Route>

        </Routes>

    );
}

export default AppRoutes;