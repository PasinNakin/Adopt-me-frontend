import React from "react";

export default function SelectOption({
    children,
    name,
    onChange,
    text,
    errorMessage,
}) {
    return (
        <label className="form-control w-full max-w-md">
            <div className="label">
                <span className="label-text text-xl text-white">{text}</span>
            </div>
            <select
                className="select select-bordered bg-white text-black  text-[1.1rem] "
                onChange={onChange}
                name={name}
                defaultValue="disable"
            >
                <option value="disable" disabled selected>
                    --please select--
                </option>
                {children}
            </select>
            {errorMessage ? (
                <div className="label">
                    <span className="label-text-alt text-red-600">
                        {errorMessage}
                    </span>
                </div>
            ) : null}
        </label>
    );
}
