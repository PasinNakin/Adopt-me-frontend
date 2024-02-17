import React from "react";

export default function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="btn rounded-[20px] bg-orange-400 hover:bg-orange-500 text-white border-none text-base"
        >
            {children}
        </button>
    );
}
