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
    const [loading, setLoading] = useState(false);
    const [relation, setRelation] = useState({});

    useEffect(() => {
        setLoading(true);
        dogApi
            .getDogBreed()
            .then((res) => setBreed(res.data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
        dogApi
            .getAllDog()
            .then((res) => {
                setAllDog(res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (dogId) {
                    const res = await dogApi.getDogWithId(dogId);
                    setDog(res.data.dogWithId);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchProfile();
    }, [dogId]);

    useEffect(() => {
        const fetchRelation = async () => {
            try {
                if (dogId) {
                    setLoading(true);
                    const res = await dogApi.getRelation(dogId);
                    // console.log(res.data);
                    setRelation(res.data);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchRelation();
    }, []);

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
        toast.success("edit success");
    };

    const deleteDog = async (dogId) => {
        await dogApi.deleteDog(dogId);
        toast.success("delete success");
    };

    const approveDog = async () => {
        await dogApi.approveDogById(dogId);
        toast.success("approve success");
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
                loading,
                relation,
                approveDog,
            }}
        >
            {children}
        </DogContext.Provider>
    );
}
