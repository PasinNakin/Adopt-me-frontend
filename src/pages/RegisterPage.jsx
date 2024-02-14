import React from "react";
import HeaderNav from "../layouts/HeaderNav";
import Input from "../components/Input";
import Button from "../components/Button";
import RegisterForm from "../features/auth/components/RegisterForm";
import Modal from "../components/Modal";

export default function RegisterPage() {
    return (
        <div>
            <HeaderNav />

            <div className="">
                <div className="bg-[#1D2144] p-10 "></div>
                <div className="bg-[#272D51] ">
                    <div className="flex justify-between">
                        <img
                            className="h-[92vh]"
                            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
