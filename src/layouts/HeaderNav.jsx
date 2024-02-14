import React from "react";
import Button from "../components/Button";

export default function HeaderNav() {
    return (
        <div className="bg-[#D8E3F4] h-[5rem]  fixed top-10 right-[10%] left-[10%]  rounded-[50px] flex justify-between items-center shadow-xl">
            <div className="flex gap-6 ml-10">
                <div>Logo</div>
                <div>Home</div>
                <div>Adopt a dog</div>
            </div>
            <div className="mr-10 flex gap-3">
                <Button>Login</Button>
                <Button>Register</Button>
            </div>
        </div>
    );
}
