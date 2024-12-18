import axios from "../config/axios";

export const createAdopt = (dogId) => axios.post(`/adopt/create`, dogId);

export const deleteAdopt = (dogId) => axios.delete(`adopt/cancel/${dogId}`);
export const getAdoptByUserId = () => axios.get("/adopt/getAdopt");
