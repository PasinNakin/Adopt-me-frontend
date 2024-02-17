import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";

const initial = {
    name: "",
    age: "",
    breed: "",
    gender: "",
    dogImage: "",
    description: "",
};

export default function CreateDogForm() {
    const [input, setInput] = useState(initial);

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <form
            // onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 justify-center items-center "
        >
            <h1 className="text-[3rem] font-bold pt-20 text-white ">
                Create Dog Profile
            </h1>
            <Input
                name="name"
                value={input.email}
                text="name"
                placeholder="dog name"
                onChange={handleChangeInput}
                // errorMessage={error.email}
            />

            <label className="form-control w-full max-w-md">
                <div className="label">
                    <span className="label-text text-xl text-white">Age</span>
                </div>
                <select
                    className="select select-bordered bg-white text-black  text-[1.1rem] "
                    onChange={handleChangeInput}
                    name="age"
                >
                    <option disabled selected>
                        --please select--
                    </option>
                    <option value="PUPPY">Puppy</option>
                    <option value="ADULT">Adult</option>
                    <option value="SENIOR">Senior</option>
                </select>
            </label>

            <Input
                name="breed"
                value={input.confirmPassword}
                text="Breed"
                placeholder="select breed"
                onChange={handleChangeInput}
                // errorMessage={error.confirmPassword}
            />

            <label className="form-control w-full max-w-md">
                <div className="label">
                    <span className="label-text text-xl text-white">
                        Gender
                    </span>
                </div>
                <select
                    className="select select-bordered bg-white text-black  text-[1.1rem] "
                    onChange={handleChangeInput}
                    name="gender"
                >
                    <option disabled selected>
                        --please select--
                    </option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>
            </label>

            <Input
                name="dogImage"
                type="file"
                value={input.firstName}
                text="Dog Image"
                placeholder="Choose picture"
                onChange={handleChangeInput}
                // errorMessage={error.firstName}
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
