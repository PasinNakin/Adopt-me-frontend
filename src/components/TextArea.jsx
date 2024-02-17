import React from "react";

export default function TextArea({ name, placeholder, onChange, value }) {
    return (
        <label className="form-control w-full max-w-md">
            <div className="label">
                <span className="label-text text-xl text-white">{name}</span>
            </div>
            <textarea
                className="textarea textarea-bordered h-24 bg-white text-black"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            ></textarea>
        </label>
    );
}
