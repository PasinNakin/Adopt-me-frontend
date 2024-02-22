import { useContext } from "react";
import { AdoptContext } from "../features/adopt/adoptContext";

export default function useAdopt() {
    return useContext(AdoptContext);
}
