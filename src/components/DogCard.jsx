export default function DogCard({ src, dogName }) {
    return (
        <div className="relative hover:scale-110">
            <img
                className="cursor-pointer max-w-[14vw] h-[45vh] mx-auto object-cover rounded-[10%] "
                src={src}
                alt="dogPic"
            />
            <h1 className="absolute left-0 right-0 bottom-0 mx-auto w-40 h-10 font-bold text-white text-center text-[1.2rem]">
                {dogName}
            </h1>
        </div>
    );
}
