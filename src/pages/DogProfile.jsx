import React from "react";
import DogContextProvider from "../features/dog/Context/DogContext";
import PageLayout from "../layouts/PageLayout";
import HeaderHero from "../layouts/HeaderHero";

export default function DogProfile() {
    return (
        <DogContextProvider>
            <PageLayout>
                <HeaderHero headerText="HEY ! PICKME UP">
                    <img
                        className="max-h-[60%] max-w-[45%] object-cover mx-auto rounded-[10%] mb-10"
                        src="https://res.cloudinary.com/daowcplwn/image/upload/v1708174382/1708174379269267238_ftpofo.jpg"
                        alt=""
                    />
                    <div className="flex justify-between gap-4 bg-slate-500 p-4">
                        <div className="mx-auto bg-white">Left container</div>
                        <div className="mx-auto bg-white">right container</div>
                    </div>
                </HeaderHero>
            </PageLayout>
        </DogContextProvider>
    );
}
