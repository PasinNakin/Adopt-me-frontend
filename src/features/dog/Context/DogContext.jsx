import { createContext, useEffect, useState } from "react";
import * as dogApi from "../../../api/dog";
import { useParams } from "react-router-dom";

export const DogContext = createContext();

export default function DogContextProvider({ children }) {
    const [breed, setBreed] = useState([]);
    const [allDog, setAllDog] = useState([]);
    const [dog, setDog] = useState({});
    const { dogId } = useParams();

    // useEffect(() => {
    //     dogApi
    //         .getDogBreed()
    //         .then((res) => setBreed(res.data))
    //         .catch((err) => console.log(err));
    // }, []);

    useEffect(() => {
        dogApi
            .getDogBreed()
            .then((res) => setBreed(res.data))
            .catch((err) => console.log(err));
        dogApi
            .getAllDog()
            .then((res) => setAllDog(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await dogApi.getDogWithId(dogId);
                setDog(res.data.dogWithId);
            } catch {
                console.log(err);
            }
        };
        fetchProfile();
    }, [dogId]);

    const createDog = async (formdata) => {
        console.log(formdata);
        await dogApi.createDog(formdata);
    };

    return (
        <DogContext.Provider
            value={{ breed, setBreed, createDog, allDog, dog }}
        >
            {children}
        </DogContext.Provider>
    );
}
