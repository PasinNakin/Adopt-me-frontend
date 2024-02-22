import axios from "../config/axios";

export const createAdopt = (dogId) => axios.post(`/adopt/create`, dogId);

// export const deleteAdopt = (id) => axios.delete()
