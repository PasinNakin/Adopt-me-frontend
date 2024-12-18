import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

export default function ProtectEditRoute({ children }) {
    const { authUser, loading } = useAuth();
    if (loading) return <div>Loading...</div>;

    return authUser ? children : <Navigate to="/" />;
}
