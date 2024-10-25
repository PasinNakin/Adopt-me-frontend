import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

export default function ProtectEditRoute({ children }) {
    const { authUser } = useAuth();
    console.log(`user : ${authUser}`);
    return authUser ? children : <Navigate to="/" />;
}
