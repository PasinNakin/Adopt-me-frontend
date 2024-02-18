import React from "react";
import DogContextProvider from "../features/dog/Context/DogContext";
import PageLayout from "../layouts/PageLayout";
import SearchingForm from "../features/dog/components/SearchingForm";
import DogContainer from "../features/dog/components/DogContainer";
import HeaderHero from "../layouts/HeaderHero";

export default function AllDogPage() {
    return (
        <DogContextProvider>
            <PageLayout>
                <HeaderHero headerText="Choose Your Lovely Child">
                    <SearchingForm />
                    <DogContainer />
                </HeaderHero>
            </PageLayout>
        </DogContextProvider>
    );
}
