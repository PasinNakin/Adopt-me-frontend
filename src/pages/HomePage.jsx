import React from "react";
import Footer from "../layouts/Footer";
import PageLayout from "../layouts/PageLayout";
import HomePageLayout from "../layouts/HomePageLayout";
import DogContextProvider from "../features/dog/Context/DogContext";

export default function HomePage() {
    return (
        <>
            <PageLayout>
                <HomePageLayout />
            </PageLayout>
            <Footer />
        </>
    );
}
