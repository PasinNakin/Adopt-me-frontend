import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import LoginForm from "../features/auth/components/LoginForm";
import useAuth from "../hooks/use-auth";
import Dropdown from "../components/Dropdown";
import ProfileLogo from "../components/ProfileLogo";

export default function HeaderNav() {
    const navigate = useNavigate();
    // const { authUser } = useAuth();

    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className="bg-[#D8E3F4] h-[5rem]  fixed top-10 right-[10%] left-[10%]  rounded-[50px] flex justify-between items-center shadow-xl z-10">
                <div className="flex gap-6 ml-6 justify-between items-center text-black font-bold text-lg">
                    <img
                        className="size-16"
                        src="https://img5.pic.in.th/file/secure-sv1/LOGOHOME.png"
                        alt="LOGOHOME.png"
                        border="0"
                    />
                    <a
                        className="cursor-pointer hover:scale-105"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </a>
                    <a
                        className="cursor-pointer hover:scale-105"
                        onClick={() => navigate("/alldog")}
                    >
                        Adopt a dog
                    </a>
                </div>

                {false ? (
                    <div className="relative flex items-center gap-6">
                        {true && (
                            <Button onClick={() => navigate("/createdog")}>
                                Add dog
                            </Button>
                        )}
                        <ProfileLogo
                            setToggle={() => setToggle((prev) => !prev)}
                        />
                        <Dropdown toggle={toggle} />
                    </div>
                ) : (
                    <div className="mr-10 flex gap-3">
                        <Button onClick={() => setOpen(true)}>Login</Button>
                        <Button onClick={() => navigate("/register")}>
                            Register
                        </Button>
                    </div>
                )}
            </div>
            {open && (
                <Modal
                    formInput={<LoginForm setOpen={() => setOpen(false)} />}
                    headText="Welcome Back Hooman"
                    onClose={() => setOpen(false)}
                />
            )}
        </div>
    );
}
