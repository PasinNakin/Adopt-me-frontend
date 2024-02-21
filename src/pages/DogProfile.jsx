import React from "react";
import DogContextProvider from "../features/dog/Context/DogContext";
import PageLayout from "../layouts/PageLayout";
import HeaderHero from "../layouts/HeaderHero";
import ProfileDogContainer from "../features/dog/components/ProfileDogContainer";

export default function DogProfile() {
    return (
        <DogContextProvider>
            <PageLayout>
                <HeaderHero headerText="HEY ! PICKME UP">
                    <ProfileDogContainer />
                </HeaderHero>
            </PageLayout>
        </DogContextProvider>
    );
}
