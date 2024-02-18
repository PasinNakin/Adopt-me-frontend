import React from "react";
import CreateDogForm from "../features/dog/components/CreateDogForm";
import PageLayout from "../layouts/PageLayout";
import PicLayout from "../layouts/PicLayout";
import DogContextProvider from "../features/dog/Context/DogContext";

export default function CreateDogProfilePage() {
    return (
        <DogContextProvider>
            <PageLayout>
                <PicLayout src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <CreateDogForm />
            </PageLayout>
        </DogContextProvider>
    );
}
