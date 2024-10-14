import React, { useState } from "react";
import SelectOption from "../../../components/SelectOption";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import useDog from "../../../hooks/use-dog";
import TextArea from "../../../components/TextArea";
import validateUpdateDog from "../validations/validate-update-dog";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function EditDogForm({ onClose }) {
    const { breed, dog, updateDog } = useDog();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [input, setInput] = useState({
        name: dog?.name,
        age: dog?.age,
        breedId: dog?.breedId,
        gender: dog?.gender,
        description: dog?.description,
    });

    const navigate = useNavigate();

    const ageArr = [
        { value: "PUPPY", name: "Puppy" },
        { value: "ADULT", name: "Adult" },
        { value: "SENIOR", name: "Senior" },
    ];
    const genderArr = [
        { value: "MALE", name: "Male" },
        { value: "FEMALE", name: "Female" },
    ];

    const handleFormSubmit = async (e) => {
        try {
            setLoading(true);
            e.preventDefault();
            const validateError = validateUpdateDog(input);
            if (validateError) {
                return setError(validateError);
            }
            await updateDog(input, dog.id);
            navigate("/allDog");
        } catch (err) {
            toast.error(err.response?.data.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-[35vh]">
                <span className="loading loading-spinner loading-lg "></span>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 justify-center items-center pb-8"
        >
            <Input
                name="name"
                value={input.name}
                text="name"
                placeholder="dog name"
                onChange={handleChangeInput}
                errorMessage={error.name}
            />
            <SelectOption
                onChange={handleChangeInput}
                name="age"
                text="Age"
                current={input.age}
                errorMessage={error.age}
                value={input.age}
            >
                {ageArr.map((el) => {
                    if (el.value === dog.age) {
                        return (
                            <option selected key={el.value} value={el.value}>
                                {el.name}
                            </option>
                        );
                    }

                    return (
                        <option selected key={el.value} value={el.value}>
                            {el.name}
                        </option>
                    );
                })}
            </SelectOption>

            <SelectOption
                onChange={handleChangeInput}
                name="breedId"
                text="Breed"
                errorMessage={error.breedId}
            >
                {breed.breed?.map((el) => {
                    if (el.dogBreed === dog.breed.dogBreed) {
                        return (
                            <option selected key={el.id} value={el.id}>
                                {el.dogBreed}
                            </option>
                        );
                    }
                    return (
                        <option key={el.id} value={el.id}>
                            {el.dogBreed}
                        </option>
                    );
                })}
            </SelectOption>

            <SelectOption
                onChange={handleChangeInput}
                name="gender"
                text="Gender"
                errorMessage={error.gender}
            >
                {genderArr.map((el) => {
                    if (el.value === dog.gender) {
                        return (
                            <option selected key={el.value} value={el.value}>
                                {el.name}
                            </option>
                        );
                    }
                    return (
                        <option key={el.value} value={el.value}>
                            {el.name}
                        </option>
                    );
                })}
                {/* <option value="MALE">Male</option>
                <option value="FEMALE">Female</option> */}
            </SelectOption>

            <TextArea
                name="description"
                placeholder="text here....."
                onChange={handleChangeInput}
                value={input.description}
            />

            <div className="flex gap-4 pt-6">
                <Button>submit</Button>
                <Button onClick={onClose}>cancel</Button>
            </div>
        </form>
    );
}
