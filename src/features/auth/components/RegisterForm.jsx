import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import validateRegister from "../validations/validate-register";
import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";

const initial = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
};

export default function RegisterForm() {
    const [input, setInput] = useState(initial);
    const [error, setError] = useState({});

    const { register } = useAuth();

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault();
            const validateError = validateRegister(input);
            if (validateError) {
                return setError(validateError);
            }
            // console.log("before");
            await register(input);
            // console.log("after")
            alert("register success");
        } catch (err) {
            if (err.response?.data.message === "email has already in use") {
                setError({ email: "already in use", mobile: "alredy in use" });
            }
        }
    };

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 justify-center items-center "
        >
            <h1 className="text-[3rem] font-bold pt-20 text-white ">
                Join Adopt Me HOOMAN
            </h1>
            <Input
                name="email"
                value={input.email}
                text="Email"
                placeholder="email"
                onChange={handleChangeInput}
                errorMessage={error.email}
            />
            <Input
                name="password"
                value={input.password}
                type="password"
                text="Password"
                placeholder="password"
                onChange={handleChangeInput}
                errorMessage={error.password}
            />
            <Input
                name="confirmPassword"
                value={input.confirmPassword}
                type="password"
                text="confirm password"
                placeholder="confirm password"
                onChange={handleChangeInput}
                errorMessage={error.confirmPassword}
            />
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
                <Button>submit</Button>
            </div>
        </form>
    );
}
