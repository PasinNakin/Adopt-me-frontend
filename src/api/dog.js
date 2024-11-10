import axios from "../config/axios";

export const createDog = (formData) =>
    axios.post("/dog/createProfile", formData);

export const getDogBreed = () => axios.get("/dog/getDogBreed");
export const getAllDog = () => axios.get("/dog/allDog");
export const getExampleDog = () => axios.get("/dog/exampleDog");
export const getAdoptedDog = () => axios.get("/dog/adoptedDog");
export const getDogWithId = (dogId) => axios.get(`/dog/profile/${dogId}`);
export const getDogPagination = (page) => axios.get(`/dog/allDog/${page}`);
export const getTotalPage = () => axios.get(`/dog/totalPage`);
export const searchDog = (queryData) =>
    axios.get("/dog/search", { params: queryData });
export const getRelation = (dogId) => axios.get(`dog/relationship/${dogId}`);

export const updateDogById = (data, dogId) =>
    axios.patch(`/dog/update/${dogId}`, data);
export const deleteDog = (dogId) => axios.delete(`/dog/deleteDog/${dogId}`);

export const approveDogById = (dogId) =>
    axios.patch(`/dog/acceptAdopt/${dogId}`);
