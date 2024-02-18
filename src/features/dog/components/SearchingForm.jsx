import React from "react";
import SelectOption from "../../../components/SelectOption";
import Button from "../../../components/Button";
import useDog from "../../../hooks/use-dog";

export default function SearchingForm() {
    const { breed } = useDog();
    return (
        <form className="flex gap-6 justify-center items-center w-[80%] mx-auto pb-10">
            <SelectOption
                // onChange={handleChangeInput}
                name="age"
                text="Age"
            >
                <option value="PUPPY">Puppy</option>
                <option value="ADULT">Adult</option>
                <option value="SENIOR">Senior</option>
            </SelectOption>

            <SelectOption
                // onChange={handleChangeInput}
                name="gender"
                text="Gender"
            >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </SelectOption>

            <SelectOption
                // onChange={handleChangeInput}
                name="breedId"
                text="Breed"
            >
                {breed.breed?.map((el) => (
                    <option key={el.id} value={el.id}>
                        {el.dogBreed}
                    </option>
                ))}
            </SelectOption>

            <div className="pt-10">
                <Button>Search</Button>
            </div>
        </form>
    );
}
