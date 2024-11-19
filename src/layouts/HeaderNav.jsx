import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import LoginForm from "../features/auth/components/LoginForm";
import useAuth from "../hooks/use-auth";
import Dropdown from "../components/Dropdown";
import ProfileLogo from "../components/ProfileLogo";
import { useRef } from "react";
import { useEffect } from "react";
import useDog from "../hooks/use-dog";

export default function HeaderNav() {
    const navigate = useNavigate();
    const { authUser, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false);
    const dropdownRef = useRef(null);

    const handleResetPath = () => {
        navigate("/alldog/1");
    };

    const handleLogOut = () => {
        setToggle(false);
        logout();
        navigate("/");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setToggle(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const buttonLinkCss = `cursor-pointer hover:scale-105 ease-in duration-100`;

    return (
        <div>
            <div className="bg-[#D8E3F4] h-[5rem] absolute top-10 right-[10%] left-[10%]  rounded-[50px] flex justify-between items-center shadow-xl z-10">
                <div className="flex gap-6 ml-6 justify-between items-center text-black font-bold text-lg">
                    <img
                        className="size-16"
                        src="https://img5.pic.in.th/file/secure-sv1/LOGOHOME.png"
                        alt="LOGOHOME.png"
                        border="0"
                    />
                    <a className={buttonLinkCss} onClick={() => navigate("/")}>
                        Home
                    </a>
                    <a className={buttonLinkCss} onClick={handleResetPath}>
                        Adopt a dog
                    </a>

                    {authUser?.role === "ADMIN" && (
                        <>
                            <a
                                className={buttonLinkCss}
                                onClick={() => navigate("/request")}
                            >
                                Request
                            </a>
                            <a
                                className={buttonLinkCss}
                                onClick={() => navigate("/adopted")}
                            >
                                Adopted
                            </a>
                        </>
                    )}

                    {authUser?.role === "USER" && (
                        <a
                            className={buttonLinkCss}
                            onClick={() => navigate("/myAdopt")}
                        >
                            Your Adopt
                        </a>
                    )}
                </div>
                {authUser ? (
                    <div className=" flex items-center gap-6">
                        {authUser?.role === "ADMIN" && (
                            <Button onClick={() => navigate("/createdog")}>
                                Add dog
                            </Button>
                        )}
                        {authUser && (
                            <div className="flex flex-col items-center text-base text-gray-900">
                                {/* <p>welcome</p> */}
                                <p className="font-medium">
                                    {authUser?.firstName}
                                </p>
                            </div>
                        )}

                        <div className="relative" ref={dropdownRef}>
                            <ProfileLogo
                                setToggle={() => setToggle((prev) => !prev)}
                            />
                            <Dropdown
                                toggle={toggle}
                                handleLogOut={handleLogOut}
                            />
                        </div>
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
                    headText="Welcome Back Hooman"
                    onClose={() => setOpen(false)}
                >
                    <LoginForm setOpen={() => setOpen(false)} />
                </Modal>
            )}
        </div>
    );
}
