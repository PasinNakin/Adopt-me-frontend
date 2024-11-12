import React from "react";
import RequestDogContainer from "../features/dog/components/RequestDogContainer";
import HeaderHero from "../layouts/HeaderHero";
import PageLayout from "../layouts/PageLayout";

function RequestDogPage() {
    return (
        <PageLayout>
            <HeaderHero headerText="Dog Request">
                <RequestDogContainer />
            </HeaderHero>
        </PageLayout>
    );
}

export default RequestDogPage;
