import React, { useState } from "react";
import SelectOption from "../../../components/SelectOption";
import Button from "../../../components/Button";
import useDog from "../../../hooks/use-dog";

export default function SearchingForm() {
    const { breed, fetchSearch } = useDog();
    const [searching, setSearching] = useState({});

    const handleChangeInput = (e) => {
        setSearching({ ...searching, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault();
            await fetchSearch(searching);
        } catch (err) {
            console.log(err);
        }
    };

    const handleReset = () => {
        window.location.reload(false);
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex gap-6 justify-center items-center w-[80%] mx-auto pb-10"
        >
            <SelectOption onChange={handleChangeInput} name="age" text="Age">
                <option value="PUPPY">Puppy</option>
                <option value="ADULT">Adult</option>
                <option value="SENIOR">Senior</option>
            </SelectOption>

            <SelectOption
                onChange={handleChangeInput}
                name="gender"
                text="Gender"
            >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </SelectOption>

            <SelectOption
                onChange={handleChangeInput}
                name="breedId"
                text="Breed"
            >
                {breed.breed?.map((el) => (
                    <option key={el.id} value={el.id}>
                        {el.dogBreed}
                    </option>
                ))}
            </SelectOption>

            <div className="pt-10 flex gap-4">
                <Button>Search</Button>
                <Button onClick={handleReset}>Clear</Button>
            </div>
        </form>
    );
}
