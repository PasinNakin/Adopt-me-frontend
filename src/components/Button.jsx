import React from "react";

export default function Button({
    children,
    onClick,
    width,
    type = "button",
    pagination,
}) {
    const BasicButton = `btn rounded-[20px] bg-orange-400 hover:bg-orange-500 text-white border-none text-base w-${width}`;
    const paginationButton =
        "btn text-black py-2 px-3 rounded-badge bg-white hover:bg-orange-500 hover:text-white active:bg-orange-600 focus:ring focus:ring-orange-200  border-none text-base ";
    return (
        <button
            type={type}
            onClick={onClick}
            className={pagination ? paginationButton : BasicButton}
        >
            {children}
        </button>
    );
}
