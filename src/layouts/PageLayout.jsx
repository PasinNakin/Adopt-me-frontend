import React from "react";
import HeaderNav from "./HeaderNav";
// import useDog from "../hooks/use-dog";
// import Spinner from "../components/Spinner";

export default function PageLayout({ children }) {
    return (
        <div>
            <HeaderNav />
            <div className="h-full">
                <div className="bg-[#1D2144] p-10 "></div>
                <div className="bg-[#272D51] ">
                    <div className="flex justify-between">{children}</div>
                </div>
            </div>
        </div>
    );
}
