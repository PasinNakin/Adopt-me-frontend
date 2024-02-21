import { Link } from "react-router-dom";

export default function DogCard({ src, dogName, dogId }) {
    return (
        <Link to={`/profile/${dogId}`}>
            <div className="relative hover:scale-110 ease-out duration-200">
                <img
                    className="cursor-pointer max-w-[14vw] h-[45vh] mx-auto object-cover rounded-[10%] "
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
