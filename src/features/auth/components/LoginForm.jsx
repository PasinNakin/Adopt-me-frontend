import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import validateLogin from "../validations/validate-login";
import useAuth from "../../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginForm({ setOpen }) {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({});

    const { login } = useAuth();

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault();

            const validationError = validateLogin(input);
            if (validationError) {
                console.log("test if validationError", validationError);
                return setError(validationError);
            }
            await login(input);
            setOpen();
            navigate("/");
            toast.success("Login successfully");
        } catch (err) {
            console.log(err);
        }
    };

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    return (
        <form className="text-center pb-[30px]" onSubmit={handleFormSubmit}>
            <div className="flex flex-col items-center pb-8">
                <Input
                    text="Email"
                    placeholder="email"
                    name="email"
                    onChange={handleChangeInput}
                    errorMessage={error.email}
                />
                <Input
                    text="password"
                    placeholder="password"
                    name="password"
                    type="password"
                    onChange={handleChangeInput}
                    errorMessage={error.password}
                />
            </div>
            <Button>Login</Button>
        </form>
    );
}
//                  name="mobile"
//                 value={input.mobile}
//                 text="Mobile"
//                 placeholder="mobile"
//                 onChange={handleChangeInput}
//                 errorMessage={error.mobile}
