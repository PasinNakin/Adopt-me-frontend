import React from "react";
import DogCard from "../../../components/DogCard";
import useDog from "../../../hooks/use-dog";

export default function DogContainer() {
    const { allDog, searchDog } = useDog();

    return (
        <div className="container  grid grid-cols-4 gap-y-10 min-h-screen p-16 bg-[#1D2144]  rounded-[8%]  ">
            {searchDog.length !== 0
                ? searchDog?.map((el) => (
                      <DogCard
                          key={el.id}
                          src={el.profileImage}
                          dogId={el.id}
                          dogName={el.name}
                      />
                  ))
                : allDog.allDogWithBreed?.map((el) => (
                      <DogCard
                          key={el.id}
                          src={el.profileImage}
                          dogId={el.id}
                          dogName={el.name}
                      />
                  ))}
        </div>
    );
}
