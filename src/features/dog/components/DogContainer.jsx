import React from "react";
import DogCard from "../../../components/DogCard";

export default function DogContainer() {
    return (
        <div className="container  grid grid-cols-4 gap-y-10 min-h-screen p-16 bg-[#1D2144]  rounded-[8%]  ">
            <DogCard />
            <DogCard />
            <DogCard />
            <DogCard />
            <DogCard />
            <DogCard />
            <DogCard />
            <DogCard />
            <DogCard />
            <DogCard />
        </div>
    );
}
