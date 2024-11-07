import React from "react";
import DogContextProvider from "../features/dog/Context/DogContext";
import PageLayout from "../layouts/PageLayout";
import SearchingForm from "../features/dog/components/SearchingForm";
import DogContainer from "../features/dog/components/DogContainer";
import HeaderHero from "../layouts/HeaderHero";
import BreedContextProvider from "../features/dog/Context/BreedContext";

export default function AllDogPage() {
    return (
        <DogContextProvider>
            <PageLayout>
                <HeaderHero headerText="Choose Your Lovely Child">
                    <BreedContextProvider>
                        <SearchingForm />
                    </BreedContextProvider>
                    <DogContainer />
                </HeaderHero>
            </PageLayout>
        </DogContextProvider>
    );
}
