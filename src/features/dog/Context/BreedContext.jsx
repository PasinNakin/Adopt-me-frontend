import { createContext, useEffect, useState } from "react";
import * as dogApi from "../../../api/dog";

export const BreedContext = createContext();

export default function BreedContextProvider({ children }) {
    const [breed, setBreed] = useState([]);
    const [searchDog, setSearchDog] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const handleResetSearch = () => {
        setSearchDog([]);
        setError(null);
    };

    useEffect(() => {
        const fetchDogBreed = async () => {
            try {
                setLoading(true);
                const response = await dogApi.getDogBreed();
                setBreed(response.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchDogBreed();
    }, []);

    const fetchSearch = async (queryData) => {
        try {
            const res = await dogApi.searchDog(queryData);
            setSearchDog(res.data);
            setError(null);
        } catch (err) {
            console.log(err);
            setError(err.response.data);
        }
    };

    return (
        <BreedContext.Provider
            value={{
                breed,
                searchDog,
                fetchSearch,
                loading,
                error,
                handleResetSearch,
            }}
        >
            {children}
        </BreedContext.Provider>
    );
}
