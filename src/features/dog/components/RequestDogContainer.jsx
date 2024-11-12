import React from "react";
import DogCard from "../../../components/DogCard";
import { useEffect } from "react";
import { useState } from "react";
import * as dogApi from "../../../api/dog";
import Spinner from "../../../components/Spinner";

function RequestDogContainer() {
    const [loading, setLoading] = useState(true);
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fectchRequestDog = async () => {
            try {
                const res = await dogApi.getDogRequest();
                setDogs(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fectchRequestDog();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="container grid grid-cols-4 gap-y-10 min-h-screen p-16 bg-[#1D2144] rounded-badge">
                {dogs?.map((el) => {
                    return (
                        <DogCard
                            status="Reserved"
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

export default RequestDogContainer;
