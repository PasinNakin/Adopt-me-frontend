import React, { useState } from "react";
import useDog from "../../../hooks/use-dog";
import DogCard from "../../../components/DogCard";
import Spinner from "../../../components/Spinner";

export default function ExampleDogContainer() {
    const { allDog, loading } = useDog();
    const totalDog = allDog?.allDogWithBreed;

    const availDog = totalDog?.filter((el) => el.status === "AVAILABLE");

    return (
        <div className="container  grid grid-cols-4 gap-y-10  p-16 bg-[#1D2144]  rounded-badge  ">
            {loading && <Spinner />}

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
