export default function Input({
    type = "text",
    placeholder,
    text,
    value,
    onChange,
    name,
    errorMessage,
}) {
    // console.log(`this is error message : ${errorMessage}`);
    // console.log(`this is value : ${name} :${value}`);
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
