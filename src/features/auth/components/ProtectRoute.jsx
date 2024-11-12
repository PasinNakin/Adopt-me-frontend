import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

export default function ProtectRoute({ children }) {
    const { authUser, loading } = useAuth();
    if (loading) return <div>Loading...</div>;
    return authUser?.role === "ADMIN" ? children : <Navigate to="/" />;
}
