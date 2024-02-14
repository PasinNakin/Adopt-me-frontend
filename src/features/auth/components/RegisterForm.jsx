import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";

export default function RegisterForm() {
    const [input, setInput] = useState({});
    const [error, setError] = useState(false);

    const handleFormSubmit = (e) => e.preventDefault();

    const handleChangeInput = (e) => {
        console.log("type");
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 justify-center items-center "
        >
            <h1 className="text-[3rem] font-bold pt-20 text-white">
                Join Adopt Me HOOMAN
            </h1>
            <Input
                name="email"
                value={input.email}
                text="Email"
                placeholder="email"
                onChange={handleChangeInput}
            />
            <Input
                name="password"
                value={input.password}
                type="password"
                text="Password"
                placeholder="password"
                onChange={handleChangeInput}
            />
            <Input
                name="confirmPassword"
                value={input.confirmPassword}
                type="password"
                text="confirm password"
                placeholder="confirm password"
                onChange={handleChangeInput}
            />
            <Input
                name="firstName"
                value={input.firstName}
                text="First name"
                placeholder="first name"
                onChange={handleChangeInput}
            />
            <Input
                name="lastName"
                value={input.lastName}
                text="Last name"
                placeholder="last name"
                onChange={handleChangeInput}
            />
            <Input
                name="mobile"
                value={input.mobile}
                text="Mobile"
                placeholder="mobile"
                onChange={handleChangeInput}
            />
            <Button>submit</Button>
        </form>
    );
}
