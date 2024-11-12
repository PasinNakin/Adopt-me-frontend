import React, { useState } from "react";
// import useDog from "../../../hooks/use-dog";
import DogCard from "../../../components/DogCard";
import { useEffect } from "react";
import * as dogApi from "../../../api/dog";
import Spinner from "../../../components/Spinner";

export default function ExampleDogContainer() {
    // const { allDog, loading } = useDog();
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExampleDog = async () => {
            try {
                const res = await dogApi.getExampleDog();
                setDogs(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchExampleDog();
    }, []);

    if (loading) {
        return (
            <div className=" flex items-center justify-center w-full h-[35vh] bg-[#1D2144]  rounded-badge">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="container  grid grid-cols-4 gap-y-10  p-16 bg-[#1D2144]  rounded-badge ">
            {dogs?.slice(0, 4).map((el) => (
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
