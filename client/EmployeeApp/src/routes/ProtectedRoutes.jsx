import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export default function ProtectedRoutes({ children }) {

    const { token } = useContext(AuthContext);

    if (!token) {
        console.log("Login first!!")
        return <Navigate to="/login" />;
    }

    return children;
}