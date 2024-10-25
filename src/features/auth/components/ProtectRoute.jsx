import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import { useState } from "react";
import { useEffect } from "react";

export default function ProtectRoute({ children }) {
    const { authUser } = useAuth();

    console.log(`user : ${JSON.stringify(authUser)}`);
    return authUser?.role === "ADMIN" ? children : <Navigate to="/" />;
}
