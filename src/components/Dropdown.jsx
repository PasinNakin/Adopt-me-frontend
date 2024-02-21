import React from "react";
import useAuth from "../hooks/use-auth";

export default function Dropdown({ toggle, handleLogOut }) {
    return (
        <>
            {toggle ? (
                <div className="absolute ">
                    <div className="bg-[#E7AC92] border-orange-400	border-4 text-white rounded-[30px] px-8 py-4 whitespace-nowrap text-center flex flex-col gap-2 font-medium text-md">
                        <div className="cursor-pointer" onClick={handleLogOut}>
                            Logout
                        </div>
                        <hr className="border-b-2" />
                        <div className="cursor-pointer">Edit profile</div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
