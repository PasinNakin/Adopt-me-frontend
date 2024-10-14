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
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault();

            const validationError = validateLogin(input);
            if (validationError) {
                console.log("test if validationError", validationError);
                return setError(validationError);
            }
            setLoading(true);
            await login(input);
            setOpen();
            navigate("/");
            toast.success("Login successfully");
        } catch (err) {
            toast.error(err.response?.data.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-[35vh]">
                <span className="loading loading-spinner loading-lg "></span>
            </div>
        );
    }

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
