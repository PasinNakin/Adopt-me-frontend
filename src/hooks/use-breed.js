import { useContext } from "react";
import { BreedContext } from "../features/dog/Context/BreedContext";

export default function useBreed() {
    return useContext(BreedContext);
}
