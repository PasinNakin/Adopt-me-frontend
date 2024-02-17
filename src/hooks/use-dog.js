import { useContext } from "react";
import { DogContext } from "../features/dog/Context/DogContext";

export default function useDog() {
    return useContext(DogContext);
}
