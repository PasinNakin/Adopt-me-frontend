import { Link } from "react-router-dom";

export default function DogCard({ src, dogName, dogId, status, color }) {
    return (
        <Link to={`/profile/${dogId}`}>
            <div className="relative hover:scale-110 ease-out duration-200">
                <div
                    className={`flex items-center justify-center absolute left-0 right-0 bottom-12 mx-auto w-28 h-10 font-bold text-white text-center text-[1.2rem] rounded-badge  ${color}`}
                >
                    {status}
                </div>
                <img
                    className="cursor-pointer max-w-[14vw] h-[45vh] mx-auto object-cover rounded-badge "
                    src={src}
                    alt="dogPic"
                />
                <h1 className="absolute left-0 right-0 bottom-0 mx-auto w-40 h-10 font-bold text-white text-center text-[1.2rem]">
                    {dogName}
                </h1>
            </div>
        </Link>
    );
}
