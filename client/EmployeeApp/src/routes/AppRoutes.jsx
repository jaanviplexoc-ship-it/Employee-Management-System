import { Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ProtectedRoutes from "./ProtectedRoutes";
import Register from "../pages/Register";
import AdminRoute from "./AdminRoute";
import Employees from "../pages/Employees";
import Attendance from "../pages/Attendance";
import Leave from "../pages/Leave";

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/register"
                element={
                    <AdminRoute>
                        <Register />
                    </AdminRoute>
                }
            />

            <Route
                path="/employees"
                element={
                    <ProtectedRoutes>
                        <Employees />
                    </ProtectedRoutes>
                }
            />

            <Route
                path="/attendance"
                element={
                    <ProtectedRoutes>
                        <Attendance />
                    </ProtectedRoutes>
                }
            />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoutes>
                        <Dashboard />
                    </ProtectedRoutes>} />

            <Route
                path="/leave"
                element={
                    <ProtectedRoutes>
                        <Leave />
                    </ProtectedRoutes>
                }
            />
        </Routes>

    )
}