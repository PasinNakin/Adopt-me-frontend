import React from "react";

export default function HeaderHero({ children, headerText }) {
    return (
        <div className="flex flex-col mx-auto w-[80%] pt-[6%] pb-[4%] min-h-screen">
            <div className="flex flex-col -center items-center ">
                <h1 className="text-[3rem] font-bold  pb-5 text-white ">
                    {headerText}
                </h1>

                <div className="border-t-2 h-1 pb-10 w-[60%] border-orange-500 "></div>
            </div>

            {children}
        </div>
    );
}
