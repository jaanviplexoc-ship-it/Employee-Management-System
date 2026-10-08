import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    const [role, setRole] = useState(
        localStorage.getItem("role")
    );

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");

        setToken("");
        setRole("");
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                role,
                setRole,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}