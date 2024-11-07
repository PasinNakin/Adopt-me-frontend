import React from "react";
import CreateDogForm from "../features/dog/components/CreateDogForm";
import PageLayout from "../layouts/PageLayout";
import BreedContextProvider from "../features/dog/Context/BreedContext";

export default function CreateDogProfilePage() {
    return (
        <BreedContextProvider>
            <PageLayout>
                <CreateDogForm />
            </PageLayout>
        </BreedContextProvider>
    );
}
