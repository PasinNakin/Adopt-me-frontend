import React from "react";
import DogContextProvider from "../features/dog/Context/DogContext";
import PageLayout from "../layouts/PageLayout";
import HeaderHero from "../layouts/HeaderHero";
import ProfileDogContainer from "../features/dog/components/ProfileDogContainer";
import AdoptContextProvider from "../features/adopt/adoptContext";

export default function DogProfile() {
    return (
        <DogContextProvider>
            <AdoptContextProvider>
                <PageLayout>
                    <HeaderHero headerText="HEY ! PICKME UP">
                        <ProfileDogContainer />
                    </HeaderHero>
                </PageLayout>
            </AdoptContextProvider>
        </DogContextProvider>
    );
}
