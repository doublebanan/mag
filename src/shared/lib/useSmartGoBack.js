import { useNavigate, useLocation } from "react-router-dom";

export function useSmartGoBack(defaultPath = "/catalog") {
    const navigate = useNavigate();
    const location = useLocation();

    return () => {
        if (location.state?.from) {
            navigate(location.state.from);
        } else {
            navigate(defaultPath);
        }
    };
}
