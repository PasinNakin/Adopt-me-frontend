import React from "react";
import DogContextProvider from "../features/dog/Context/DogContext";
import PageLayout from "../layouts/PageLayout";
import HeaderHero from "../layouts/HeaderHero";
import AdoptedDogContainer from "../features/dog/components/AdoptedDogContainer";

function AdoptedPage() {
    return (
        <DogContextProvider>
            <PageLayout>
                <HeaderHero headerText="Adopted Dog">
                    <AdoptedDogContainer />
                </HeaderHero>
            </PageLayout>
        </DogContextProvider>
    );
}

export default AdoptedPage;
