import React from "react";
import Footer from "../layouts/Footer";
import PageLayout from "../layouts/PageLayout";
import HomePageLayout from "../layouts/HomePageLayout";

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
