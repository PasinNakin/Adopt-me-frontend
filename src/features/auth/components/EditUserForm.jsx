import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import useAuth from "../../../hooks/use-auth";
import validateEditUser from "../validations/validate-update-user";

function EditUserForm() {
    const initial = {
        firstName: "",
        lastName: "",
        mobile: "",
    };

    const [input, setInput] = useState(initial);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const { update } = useAuth();

    const handleFormSubmit = async (e) => {
        try {
            setLoading(true);
            e.preventDefault();
            const validateError = validateEditUser(input);
            if (validateError) {
                return setError(validateError);
            }
            await update(input);
            toast.success("update successfully");
        } catch (err) {
            if (
                err.response?.data.message ===
                "email or mobile number is already in use."
            ) {
                setError({ mobile: "alredy in use" });
            }
        } finally {
            setLoading(false);
        }
    };

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-dvh">
                <span className="loading loading-spinner loading-lg "></span>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 justify-center items-center pb-5"
        >
            <h1 className="text-[3rem] font-bold pt-20 text-white ">
                Edit your Profile
            </h1>

            <Input
                name="firstName"
                value={input.firstName}
                text="First name"
                placeholder="first name"
                onChange={handleChangeInput}
                errorMessage={error.firstName}
            />
            <Input
                name="lastName"
                value={input.lastName}
                text="Last name"
                placeholder="last name"
                onChange={handleChangeInput}
                errorMessage={error.lastName}
            />
            <Input
                name="mobile"
                value={input.mobile}
                text="Mobile"
                placeholder="mobile"
                onChange={handleChangeInput}
                errorMessage={error.mobile}
            />
            <div className="pt-6">
                <Button type="submit">submit</Button>
            </div>
        </form>
    );
}

export default EditUserForm;
