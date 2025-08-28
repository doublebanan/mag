import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../model/useAuthStore";

export const RequireAuth = ({ children }) => {
    const isAuthed = useAuthStore((s) => s.isAuthenticated());
    const location = useLocation();
    if (!isAuthed) {
        return <Navigate to="/profile" state={{ from: location }} replace />;
    }
    return children;
};
