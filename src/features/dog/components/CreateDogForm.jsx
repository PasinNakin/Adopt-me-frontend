import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import * as dogApi from "../../../api/dog";
import SelectOption from "../../../components/SelectOption";
import validateCreateDog from "../validations/validation-create-dog";
import { toast } from "react-toastify";
import PicLayout from "../../../layouts/PicLayout";
import useBreed from "../../../hooks/use-breed";
import { AGE, GENDER, INITIAL_DOG } from "../../../utils/initialValues";
import Spinner from "../../../components/Spinner";

export default function CreateDogForm() {
    const [input, setInput] = useState(INITIAL_DOG);
    const [error, setError] = useState({});
    const [image, setImage] = useState(null);
    const { breed } = useBreed();
    const [loading, setLoading] = useState(false);

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        try {
            setLoading(true);
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

            await dogApi.createDog(formData);
            toast.success("create successfully");
            setError({});
            setInput(INITIAL_DOG);
            window.location.reload();
        } catch (err) {
            toast.error(err.response?.data.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="flex justify-center w-screen h-screen ">
            {image ? (
                <PicLayout src={URL.createObjectURL(image)} />
            ) : (
                <PicLayout src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            )}

            <form
                onSubmit={handleFormSubmit}
                className="flex flex-col flex-1 justify-center items-center pb-"
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

                <div className="pt-6 pb-6">
                    <Button type="submit">submit</Button>
                </div>
            </form>
        </div>
    );
}
