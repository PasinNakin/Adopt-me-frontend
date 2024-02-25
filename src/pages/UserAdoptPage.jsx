import React from "react";

import PageLayout from "../layouts/PageLayout";
import HeaderHero from "../layouts/HeaderHero";
import AdoptContextProvider from "../features/adopt/adoptContext";
import AdoptDogContainer from "../features/adopt/components/AdoptDogContainer";

export default function UserAdoptPage() {
    return (
        <AdoptContextProvider>
            <PageLayout>
                <HeaderHero headerText="Your Adopt">
                    <AdoptDogContainer />
                </HeaderHero>
            </PageLayout>
        </AdoptContextProvider>
    );
}
