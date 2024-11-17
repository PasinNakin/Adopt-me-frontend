import React, { useState } from "react";
import SelectOption from "../../../components/SelectOption";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import TextArea from "../../../components/TextArea";
// import * as dogApi from "../../../api/dog";
// import validateUpdateDog from "../validations/validate-update-dog";
// import { toast } from "react-toastify";
// import useDogProfile from "../../../hooks/useDogProfile";
import useBreed from "../../../hooks/use-breed";
import { AGE, GENDER } from "../../../utils/initialValues";
import useDogEdit from "../../../hooks/useDogEdit";
import Spinner from "../../../components/Spinner";

export default function EditDogForm({
    onClose,
    dog,
    setOpen,
    updateDogProfile,
    handleIsSubmit,
}) {
    const { loading, error, input, handleFormSubmit, handleChangeInput } =
        useDogEdit(dog, setOpen, updateDogProfile, handleIsSubmit);

    const { breed } = useBreed();

    if (loading) {
        return <Spinner />;
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 justify-center items-center pb-8"
        >
            <Input
                name="name"
                text="name"
                placeholder="dog name"
                onChange={handleChangeInput}
                errorMessage={error.name}
                value={input.name}
            />
            <SelectOption
                onChange={handleChangeInput}
                name="age"
                text="Age"
                errorMessage={error.age}
                value={input.age}
            >
                {AGE.map((el) => {
                    return (
                        <option key={el.value} value={el.value}>
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
                value={input.breedId}
            >
                {breed.breed?.map((el) => {
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
                value={input.gender}
            >
                {GENDER.map((el) => {
                    return (
                        <option key={el.value} value={el.value}>
                            {el.name}
                        </option>
                    );
                })}
            </SelectOption>

            <TextArea
                name="description"
                placeholder="text here....."
                onChange={handleChangeInput}
                value={input.description}
            />

            <div className="flex gap-4 pt-6">
                <Button type="submit">submit</Button>
                <Button onClick={onClose}>cancel</Button>
            </div>
        </form>
    );
}
