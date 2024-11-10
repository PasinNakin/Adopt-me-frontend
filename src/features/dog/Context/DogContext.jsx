import { createContext, useEffect, useState } from "react";
import * as dogApi from "../../../api/dog";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const DogContext = createContext();

export default function DogContextProvider({ children }) {
    // const [allDog, setAllDog] = useState([]);
    const [dogInPage, setDogInPage] = useState([]);
    const { page } = useParams();
    const [searchDog, setSearchDog] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const handleResetSearch = () => {
        setSearchDog([]);
        setError(null);
    };

    useEffect(() => {
        const fetchTotalPage = async () => {
            try {
                const res = await dogApi.getTotalPage();
                setTotalPage(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTotalPage();
    }, []);

    useEffect(() => {
        const fetchDogPagination = async () => {
            setLoading(true);
            try {
                const res = await dogApi.getDogPagination(page || 1);
                setDogInPage(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchDogPagination();
    }, [page]);

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

    const pageNumbers = [];

    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i);
    }
    const paginate = (page) => setCurrentPage(page);

    return (
        <DogContext.Provider
            value={{
                searchDog,
                fetchSearch,
                loading,
                error,
                handleResetSearch,
                paginate,
                pageNumbers,
                currentPage,
                dogInPage,
                setCurrentPage,
            }}
        >
            {children}
        </DogContext.Provider>
    );
}
