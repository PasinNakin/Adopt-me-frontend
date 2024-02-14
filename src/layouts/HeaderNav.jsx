import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function HeaderNav() {
    const navigate = useNavigate();

    const toRegisterPage = () => {
        navigate("/register");
    };

    const toHomePage = () => {
        navigate("/");
    };

    const toAdoptDogPage = () => {
        navigate("/alldog");
    };

    return (
        <div className="bg-[#D8E3F4] h-[5rem]  fixed top-10 right-[10%] left-[10%]  rounded-[50px] flex justify-between items-center shadow-xl">
            <div className="flex gap-6 ml-10">
                <div>Logo</div>
                <a className="cursor-pointer" onClick={toHomePage}>
                    Home
                </a>
                <a className="cursor-pointer" onClick={toAdoptDogPage}>
                    Adopt a dog
                </a>
            </div>
            <div className="mr-10 flex gap-3">
                <Button>Login</Button>
                <Button onClick={toRegisterPage}>Register</Button>
            </div>
        </div>
    );
}
