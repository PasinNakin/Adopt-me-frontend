import { createContext, useEffect, useState } from "react";

import * as adoptApi from "../../api/adopt";

import { toast } from "react-toastify";

export const AdoptContext = createContext();

export default function AdoptContextProvider({ children }) {
    const [adoptData, setAdoptData] = useState();

    const createAdopt = async (dogId) => {
        // console.log(dogId);
        const data = await adoptApi.createAdopt(dogId);
    };

    useEffect(() => {
        const fetchAdopt = async () => {
            try {
                const res = await adoptApi.gatAdoptByUserId();

                setAdoptData(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAdopt();
    }, []);

    const cancelAdopt = async (dogId) => {
        await adoptApi.deleteAdopt(dogId);
        toast.success("Cancel complete");
    };

    return (
        <AdoptContext.Provider
            value={{
                createAdopt,
                adoptData,
                cancelAdopt,
            }}
        >
            {children}
        </AdoptContext.Provider>
    );
}
