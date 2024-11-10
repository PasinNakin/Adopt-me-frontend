import React, { useState } from "react";
import SelectOption from "../../../components/SelectOption";
import Button from "../../../components/Button";
import useDog from "../../../hooks/use-dog";
import { toast } from "react-toastify";
import useBreed from "../../../hooks/use-breed";
import { AGE, GENDER } from "../../../utils/initialValues";

export default function SearchingForm() {
    const initial = {
        age: "",
        gender: "",
        breedId: "",
    };

    const { fetchSearch, handleResetSearch } = useDog();
    const { breed } = useBreed();
    const [searching, setSearching] = useState(initial);

    const handleChangeInput = (e) => {
        setSearching({ ...searching, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (searching.age || searching.gender || searching.breedId) {
            await fetchSearch(searching);
        } else toast.error("please select one");
    };

    const handleReset = () => {
        setSearching(initial);
        handleResetSearch();
    };

    return (
        <>
            <form
                onSubmit={handleFormSubmit}
                className="flex gap-6 justify-center items-center w-[80%] mx-auto pb-10"
            >
                <SelectOption
                    onChange={handleChangeInput}
                    name="age"
                    text="Age"
                    value={searching.age}
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
                    name="gender"
                    text="Gender"
                    value={searching.gender}
                >
                    {GENDER.map((el) => {
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
                    value={searching.breedId}
                >
                    {breed.breed?.map((el) => (
                        <option key={el.id} value={el.id}>
                            {el.dogBreed}
                        </option>
                    ))}
                </SelectOption>

                <div className="pt-10 flex gap-4">
                    <Button type="submit">Search</Button>
                    <Button onClick={handleReset}>Clear</Button>
                </div>
            </form>
        </>
    );
}
