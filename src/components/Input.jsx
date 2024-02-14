// const defaultClasses =
//     "w-full focus:outline-none px-3 py-1.5 border  rounded-md  focus:ring-2 ";

// export default function Input({
//     type = "text",
//     placeholder,
//     value,
//     onChange,
//     name,
//     errorMessage,
// }) {
//     const extendedClasses = errorMessage
//         ? "border-red-500 focus:ring-red-300"
//         : "border-blue-500 focus:ring-blue-300 border-blue-300";

//     return (
//         <>
//             <input
//                 type={type}
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={onChange}
//                 name={name}
//                 className={`${defaultClasses} ${extendedClasses}`}
//             />
//             {errorMessage ? (
//                 <small className="text-red-500">{errorMessage}</small>
//             ) : null}
//         </>
//     );
// }

export default function Input({
    type = "text",
    placeholder,
    text,
    value,
    onChange,
    name,
}) {
    return (
        <label className="form-control w-full max-w-md">
            <div className="label">
                <span className="label-text text-xl text-white">{text}</span>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                className="input input-bordered w-full max-w-full text-black bg-white h-8"
                onChange={onChange}
                name={name}
            />
            <div className="label">
                <span className="label-text-alt text-red-600">
                    Error message
                </span>
            </div>
        </label>
    );
}
