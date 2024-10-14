import React from "react";

export default function Button({ children, onClick, width, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn rounded-[20px] bg-orange-400 hover:bg-orange-500 text-white border-none text-base w-${width}`}
        >
            {children}
        </button>
    );
}
