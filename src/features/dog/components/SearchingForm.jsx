import React, { useState } from "react";
import SelectOption from "../../../components/SelectOption";
import Button from "../../../components/Button";
import useDog from "../../../hooks/use-dog";
import { toast } from "react-toastify";

export default function SearchingForm() {
    const { breed, fetchSearch, handleResetSearch } = useDog();
    const [searching, setSearching] = useState({
        age: "",
        gender: "",
        breedId: "",
    });

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
        setSearching({
            age: "",
            gender: "",
            breedId: "",
        });
        handleResetSearch();
    };
    console.log(searching);

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
                    <option value="PUPPY">Puppy</option>
                    <option value="ADULT">Adult</option>
                    <option value="SENIOR">Senior</option>
                </SelectOption>

                <SelectOption
                    onChange={handleChangeInput}
                    name="gender"
                    text="Gender"
                    value={searching.gender}
                >
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
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
