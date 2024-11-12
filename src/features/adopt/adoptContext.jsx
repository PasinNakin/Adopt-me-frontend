import { createContext, useEffect, useState } from "react";

import * as adoptApi from "../../api/adopt";

export const AdoptContext = createContext();

export default function AdoptContextProvider({ children }) {
    const [adoptData, setAdoptData] = useState();

    const createAdopt = async (dogId) => {
        await adoptApi.createAdopt(dogId);
    };

    useEffect(() => {
        const fetchAdopt = async () => {
            try {
                const res = await adoptApi.getAdoptByUserId();

                setAdoptData(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAdopt();
    }, []);

    const cancelAdopt = async (dogId) => {
        await adoptApi.deleteAdopt(dogId);
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
