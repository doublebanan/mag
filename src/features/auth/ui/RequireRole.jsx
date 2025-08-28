import { Navigate } from "react-router-dom";
import { useAuthStore } from "../model/useAuthStore";

export const RequireRole = ({ roles, children }) => {
    const ok = useAuthStore((s) => s.hasRole(roles));
    if (!ok) return <Navigate to="/" replace />;
    return children;
};
