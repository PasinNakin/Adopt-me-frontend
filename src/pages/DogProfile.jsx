import React from "react";
import DogContextProvider from "../features/dog/Context/DogContext";
import PageLayout from "../layouts/PageLayout";
import HeaderHero from "../layouts/HeaderHero";
import ProfileDogContainer from "../features/dog/components/ProfileDogContainer";
import AdoptContextProvider from "../features/adopt/adoptContext";
import BreedContextProvider, {
    BreedContext,
} from "../features/dog/Context/BreedContext";

export default function DogProfile() {
    return (
        <AdoptContextProvider>
            <BreedContextProvider>
                <PageLayout>
                    <HeaderHero headerText="HEY ! PICKME UP">
                        <ProfileDogContainer />
                    </HeaderHero>
                </PageLayout>
            </BreedContextProvider>
        </AdoptContextProvider>
    );
}
