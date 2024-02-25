import React from "react";
import DogCard from "../../../components/DogCard";
import useAdopt from "../../../hooks/use-adopt";

export default function AdoptDogContainer() {
    const { adoptData } = useAdopt();
    console.log(adoptData);
    return (
        <div className="container  grid grid-cols-4 gap-y-10 min-h-screen p-16 bg-[#1D2144]  rounded-[8%]  ">
            {adoptData?.map((el) => {
                if (el.dog?.status === "ADOPTED") {
                    return (
                        <DogCard
                            status="Accept"
                            color="bg-orange-400"
                            key={el.dog.id}
                            src={el.dog.profileImage}
                            dogId={el.dog.id}
                            dogName={el.dog.name}
                        />
                    );
                }
                return (
                    <DogCard
                        status="pending"
                        color="bg-orange-400"
                        key={el.dog.id}
                        src={el.dog.profileImage}
                        dogId={el.dog.id}
                        dogName={el.dog.name}
                    />
                );
            })}
        </div>
    );
}
