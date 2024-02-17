import axios from "../config/axios";

export const createDog = (formData) => axios.post("./dog/createProfile");
export const getDogBreed = () => axios.get("./dog/getDogBreed");
