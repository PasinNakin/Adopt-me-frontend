import React from "react";
import useDog from "../../../hooks/use-dog";
import DogCard from "../../../components/DogCard";

export default function ExampleDogContainer() {
    const { allDog } = useDog();
    return (
        <div className="container  grid grid-cols-4 gap-y-10  p-16 bg-[#1D2144]  rounded-badge  ">
            {allDog.allDogWithBreed?.slice(0, 4).map((el) => (
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
