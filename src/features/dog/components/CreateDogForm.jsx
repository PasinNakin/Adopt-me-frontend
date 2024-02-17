import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import useDog from "../../../hooks/use-dog";
import SelectOption from "../../../components/SelectOption";
import validateCreateDog from "../validations/validation-create-dog";

const initial = {
    name: "",
    age: "",
    breedId: "",
    gender: "",
    profileImage: "",
    description: "",
};

export default function CreateDogForm() {
    const [input, setInput] = useState(initial);
    const [error, setError] = useState({});
    const { breed, createDog } = useDog();

    console.log(typeof input.breedId, input.breedId);

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault();
            const validateError = validateCreateDog(input);
            if (validateError) {
                return setError(validateError);
            }
            alert("if success");
            await createDog(input);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 justify-center items-center "
        >
            <h1 className="text-[3rem] font-bold pt-20 text-white ">
                Create Dog Profile
            </h1>
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
                errorMessage={error.age}
            >
                <option value="PUPPY">Puppy</option>
                <option value="ADULT">Adult</option>
                <option value="SENIOR">Senior</option>
            </SelectOption>

            <SelectOption
                onChange={handleChangeInput}
                name="breedId"
                text="Breed"
                errorMessage={error.breedId}
            >
                {breed.breed?.map((el) => (
                    <option key={el.id} value={el.id}>
                        {el.dogBreed}
                    </option>
                ))}
            </SelectOption>

            <SelectOption
                onChange={handleChangeInput}
                name="gender"
                text="Gender"
                errorMessage={error.gender}
            >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </SelectOption>

            <Input
                name="profileImage"
                type="file"
                value={input.profileImage}
                text="Dog Image"
                placeholder="Choose picture"
                onChange={handleChangeInput}
                errorMessage={error.profileImage}
            />
            <TextArea
                name="description"
                placeholder="text here....."
                onChange={handleChangeInput}
                value={input.description}
            />

            <div className="pt-6">
                <Button>submit</Button>
            </div>
        </form>
    );
}
