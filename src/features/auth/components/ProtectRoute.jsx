import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

export default function ProtectRoute({ children }) {
    const { authUser, loading } = useAuth();
    if (loading) return <div>Loading...</div>;
    // console.log(`user : ${JSON.stringify(authUser)}`);
    return authUser?.role === "ADMIN" ? children : <Navigate to="/" />;
}
