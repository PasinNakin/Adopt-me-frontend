import { useState } from "react";
import { toast } from "react-toastify";
import * as dogApi from "../api/dog";
import useDogProfile from "./useDogProfile";
import validateUpdateDog from "../features/dog/validations/validate-update-dog";

export default function useDogEdit(dog, setOpen) {
    const initial = {
        name: dog?.name || "",
        age: dog?.age || "",
        breedId: dog?.breedId || "",
        gender: dog?.gender || "",
        description: dog?.description || "",
    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [input, setInput] = useState(initial);
    const { setIsEdit, updateDogProfile } = useDogProfile();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const validateError = validateUpdateDog(input);
            if (validateError) {
                return setError(validateError);
            }
            const updateDog = await dogApi.updateDogById(input, dog.id);
            setOpen(false);
            console.log("update dog :" + JSON.stringify(updateDog.data));
            updateDogProfile(updateDog.data);
            toast.success("Change is successfully");
        } catch (err) {
            toast.error(err.response?.data.message || "Somethong went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    return { loading, error, input, handleFormSubmit, handleChangeInput };
}
