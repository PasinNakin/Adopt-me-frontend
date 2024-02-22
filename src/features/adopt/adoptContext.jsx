import { createContext, useEffect, useState } from "react";

import * as adoptApi from "../../api/adopt";

import { toast } from "react-toastify";

export const AdoptContext = createContext();

export default function AdoptContextProvider({ children }) {
    const createAdopt = async (dogId) => {
        // console.log(dogId);
        const data = await adoptApi.createAdopt(dogId);
    };

    return (
        <AdoptContext.Provider
            value={{
                createAdopt,
            }}
        >
            {children}
        </AdoptContext.Provider>
    );
}
