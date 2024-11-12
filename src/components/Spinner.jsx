import React from "react";

function Spinner() {
    return (
        <div>
            <div className=" flex items-center justify-center w-full h-[50vh] rounded-badge ">
                <span className="loading loading-spinner loading-lg "></span>
            </div>
        </div>
    );
}

export default Spinner;
