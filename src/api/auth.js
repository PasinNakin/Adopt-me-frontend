import axios from "../config/axios";

export const register = (user) => axios.post("/auth/register", user);
export const login = (credential) => axios.post("/auth/login", credential);
export const fetchMe = () => axios.get("/auth/me");
export const editUser = (newData) => axios.patch("/auth/editUser", newData);
