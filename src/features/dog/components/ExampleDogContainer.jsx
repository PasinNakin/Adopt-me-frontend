import React, { useState } from "react";
import useDog from "../../../hooks/use-dog";
import DogCard from "../../../components/DogCard";

export default function ExampleDogContainer() {
    const { allDog, loading } = useDog();
    const totalDog = allDog?.allDogWithBreed;

    const availDog = totalDog?.filter((el) => el.status === "AVAILABLE");

    if (loading) {
        return (
            <div className=" flex items-center justify-center w-full h-[35vh] bg-[#1D2144]  rounded-badge">
                <span className="loading loading-spinner loading-lg "></span>
            </div>
        );
    }

    return (
        <div className="container  grid grid-cols-4 gap-y-10  p-16 bg-[#1D2144]  rounded-badge ">
            {availDog?.slice(0, 4).map((el) => (
                <DogCard
                    key={el.id}
                    src={el.profileImage}
                    dogName={el.name}
                    dogId={el.id}
                />
            ))}
        </div>
    );
}
