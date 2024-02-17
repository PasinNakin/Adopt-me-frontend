import React from "react";

export default function Dropdown({ toggle }) {
    return (
        <>
            {toggle ? (
                <div className="absolute left-20 top-14">
                    <div className="bg-[#E7AC92] border-white	border-4 text-white rounded-[30px] px-8 py-4 whitespace-nowrap text-center flex flex-col gap-2 font-medium text-md">
                        <div className="cursor-pointer">Logout</div>
                        <hr className="border-b-2" />
                        <div className="cursor-pointer">Edit profile</div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
