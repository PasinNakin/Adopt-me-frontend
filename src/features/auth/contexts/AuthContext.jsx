import { useState } from "react";
import { createContext } from "react";

import * as authApi from "../../../api/auth";
import { clearToken, storeToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);

    const register = async (user) => {
        const res = await authApi.register(user);
        setAuthUser(res.data.newUser);
        storeToken(res.data.accessToken);
    };

    const login = async (credential) => {
        const res = await authApi.login(credential);
        setAuthUser(res.data.newUser);
        storeToken(res.data.accessToken);
    };

    const logout = () => {
        setAuthUser(null);
        clearToken();
    };

    return (
        <AuthContext.Provider value={{ authUser, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
