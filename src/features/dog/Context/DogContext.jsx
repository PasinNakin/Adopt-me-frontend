import { createContext, useEffect, useState } from "react";
import * as dogApi from "../../../api/dog";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const DogContext = createContext();

export default function DogContextProvider({ children }) {
    const [breed, setBreed] = useState([]);
    const [allDog, setAllDog] = useState([]);
    const [dog, setDog] = useState({});
    const { dogId } = useParams();
    const [searchDog, setSearchDog] = useState([]);

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
            } catch (err) {
                console.log(err);
            }
        };
        fetchProfile();
    }, [dogId]);

    const fetchSearch = async (queryData) => {
        try {
            const res = await dogApi.searchDog(queryData);
            setSearchDog(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const createDog = async (formdata) => {
        console.log(formdata);
        await dogApi.createDog(formdata);
    };

    const updateDog = async (data, dogId) => {
        await dogApi.updateDogById(data, dogId);
        toast.success("edit successfully");
    };

    const deleteDog = async (dogId) => {
        await dogApi.deleteDog(dogId);
        toast.success("delete successfully");
    };

    return (
        <DogContext.Provider
            value={{
                breed,
                setBreed,
                createDog,
                allDog,
                dog,
                updateDog,
                deleteDog,
                searchDog,
                fetchSearch,
            }}
        >
            {children}
        </DogContext.Provider>
    );
}
