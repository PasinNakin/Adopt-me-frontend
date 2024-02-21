import React from "react";
import SelectOption from "../../../components/SelectOption";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import useDog from "../../../hooks/use-dog";
import TextArea from "../../../components/TextArea";

export default function EditDogForm({ onClose }) {
    const { breed } = useDog();
    return (
        <form
            // onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 justify-center items-center pb-8"
        >
            <Input
                name="name"
                // value={input.name}
                text="name"
                placeholder="dog name"
                // onChange={handleChangeInput}
                // errorMessage={error.name}
            />
            <SelectOption
                // onChange={handleChangeInput}
                name="age"
                text="Age"
                // errorMessage={error.age}
                // value={input.age}
            >
                <option value="PUPPY">Puppy</option>
                <option value="ADULT">Adult</option>
                <option value="SENIOR">Senior</option>
            </SelectOption>

            <SelectOption
                // onChange={handleChangeInput}
                name="breedId"
                text="Breed"
                // errorMessage={error.breedId}
            >
                {breed.breed?.map((el) => (
                    <option key={el.id} value={el.id}>
                        {el.dogBreed}
                    </option>
                ))}
            </SelectOption>

            <SelectOption
                // onChange={handleChangeInput}
                name="gender"
                text="Gender"
                // errorMessage={error.gender}
            >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </SelectOption>

            <TextArea
                name="description"
                placeholder="text here....."
                // onChange={handleChangeInput}
                // value={input.description}
            />

            <div className="flex gap-4 pt-6">
                <Button>submit</Button>
                <Button onClick={onClose}>cancel</Button>
            </div>
        </form>
    );
}
