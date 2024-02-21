import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import useDog from "../../../hooks/use-dog";
import SelectOption from "../../../components/SelectOption";
import validateCreateDog from "../validations/validation-create-dog";
import { toast } from "react-toastify";

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
    const [image, setImage] = useState(null);
    const { breed, createDog } = useDog();

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
            const formData = new FormData();
            formData.append("name", input?.name);
            formData.append("age", input.age);
            formData.append("breedId", input.breedId);
            formData.append("gender", input.gender);
            formData.append("description", input.description);
            formData.append("profileImage", image);

            await createDog(formData);
            setError({});
            setInput(initial);

            toast.success("create successfully");
        } catch (err) {
            toast.error(err.response?.data.message);
        }
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 justify-center items-center pb-8"
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
                // value={input.age}
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
                onChange={(e) => {
                    setInput({ ...input, [e.target.name]: e.target.value });
                    setImage(e.target.files[0]);
                }}
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
