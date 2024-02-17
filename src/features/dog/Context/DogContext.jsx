import { createContext, useEffect, useState } from "react";
import * as dogApi from "../../../api/dog";

export const DogContext = createContext();

export default function DogContextProvider({ children }) {
    const [breed, setBreed] = useState([]);

    useEffect(() => {
        dogApi
            .getDogBreed()
            .then((res) => setBreed(res.data))
            .catch((err) => console.log(err));
    }, []);

    const createDog = async (formdata) => {
        console.log(formdata);
        await dogApi.createDog(formdata);
    };

    return (
        <DogContext.Provider value={{ breed, setBreed, createDog }}>
            {children}
        </DogContext.Provider>
    );
}
