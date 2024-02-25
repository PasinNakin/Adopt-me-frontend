import React from "react";
import CreateDogForm from "../features/dog/components/CreateDogForm";
import PageLayout from "../layouts/PageLayout";
import PicLayout from "../layouts/PicLayout";

export default function CreateDogProfilePage() {
    return (
        <>
            <PageLayout>
                <CreateDogForm />
            </PageLayout>
        </>
    );
}
