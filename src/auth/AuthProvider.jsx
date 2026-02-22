import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import jsonUsers from "../data/users.json";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [activeUser, setActiveUser] = useState(null);
    const navigate = useNavigate();

    function handleLogin(email, password) {
        const user = jsonUsers.users.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            return { message: "email or password wrong" };
        }

        setActiveUser(user);
        navigate("/categories");
        return null;
    }

    function handleLogout() {
        setActiveUser(null);
        navigate("/");
    }

    return (
        <AuthContext value={{ activeUser, onLogin: handleLogin, onLogout: handleLogout }}>
            {children}
        </AuthContext>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}