import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import useAuth from "../../../hooks/use-auth";
import validateEditUser from "../validations/validate-update-user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditUserForm() {
    const { update, authUser } = useAuth();
    const initial = {
        firstName: authUser?.firstName,
        lastName: authUser.lastName,
        mobile: authUser.mobile,
    };
    const [input, setInput] = useState(initial);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        try {
            setError({});
            setLoading(true);
            e.preventDefault();
            const validateError = validateEditUser(input);
            if (validateError) {
                return setError(validateError);
            }
            await update(input);
            navigate("/");
            toast.success("update successfully");
        } catch (err) {
            if (
                err.response?.data.message ===
                "This phone number is already in use."
            ) {
                setError({ mobile: "This phone number is already in use." });
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
            <div className="flex items-center justify-center w-full ">
                <span className="loading loading-spinner loading-lg "></span>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 justify-start items-center py-8"
        >
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
