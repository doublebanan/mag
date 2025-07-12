import { useNavigate } from "react-router-dom";

export function useGoToCatalog() {
    const navigate = useNavigate();

    return () => {
        navigate("/catalog");
    };
}
