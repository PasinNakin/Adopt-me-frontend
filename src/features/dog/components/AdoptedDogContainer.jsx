import React from "react";
import useDog from "../../../hooks/use-dog";
import DogCard from "../../../components/DogCard";
import { useEffect } from "react";
import { useState } from "react";
import * as dogApi from "../../../api/dog";
import Spinner from "../../../components/Spinner";

function AdoptedDogContainer() {
    const [loading, setLoading] = useState(true);
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fectchAdoptedDog = async () => {
            try {
                const res = await dogApi.getAdoptedDog();
                setDogs(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fectchAdoptedDog();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="container grid grid-cols-4 gap-y-10 min-h-[33rem] p-16 bg-[#1D2144] rounded-badge">
                {dogs?.map((el) => {
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
