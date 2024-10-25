import { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

import * as authApi from "../../../api/auth";
import { clearToken, storeToken, getToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const token = getToken();
            if (token) {
                try {
                    const res = await authApi.fetchMe();
                    setAuthUser(res.data.user);
                } catch (err) {
                    toast.error(err.response?.data.message);
                } finally {
                    setLoading(false);
                }
            }
        };
        // if (getToken()) {
        //     authApi
        //         .fetchMe()
        //         .then((res) => {
        //             setAuthUser(res.data.user);
        //         })
        //         .catch((err) => {
        //             toast.error(err.response?.data.message);
        //         });
        // }
        fetchUser();
    }, []);

    const register = async (user) => {
        const res = await authApi.register(user);
        setAuthUser(res.data.newUser);
        storeToken(res.data.accessToken);
    };

    const login = async (credential) => {
        const res = await authApi.login(credential);
        setAuthUser(res.data.user);
        storeToken(res.data.accessToken);
    };

    const update = async (newData) => {
        const res = await authApi.editUser(newData);
    };

    const logout = () => {
        setAuthUser(null);
        clearToken();
        toast.success("Logout");
    };

    return (
        <AuthContext.Provider
            value={{ authUser, register, login, logout, update }}
        >
            {children}
        </AuthContext.Provider>
    );
}
