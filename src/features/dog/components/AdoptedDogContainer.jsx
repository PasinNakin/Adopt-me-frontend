import React from "react";
import useDog from "../../../hooks/use-dog";
import DogCard from "../../../components/DogCard";

function AdoptedDogContainer() {
    const { allDog } = useDog();
    const dogs = allDog?.allDogWithBreed;
    const AdoptedDogs = dogs?.filter((dog) => dog.status === "ADOPTED");
    console.log(AdoptedDogs);
    return (
        <div className="flex flex-col gap-5">
            <div className="container grid grid-cols-4 gap-y-10 min-h-screen p-16 bg-[#1D2144] rounded-badge">
                {AdoptedDogs?.map((el) => {
                    return (
                        <DogCard
                            status={el.status}
                            color="bg-orange-400"
                            key={el.id}
                            src={el.profileImage}
                            dogId={el.id}
                            dogName={el.name}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default AdoptedDogContainer;
