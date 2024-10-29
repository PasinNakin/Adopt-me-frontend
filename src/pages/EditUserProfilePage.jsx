import React from "react";
import PageLayout from "../layouts/PageLayout";
import EditUserForm from "../features/auth/components/EditUserForm";
import HeaderHero from "../layouts/HeaderHero";

function EditUserProfilePage() {
    return (
        <>
            <PageLayout>
                <HeaderHero headerText="Change your profile">
                    <EditUserForm />
                </HeaderHero>
            </PageLayout>
        </>
    );
}

export default EditUserProfilePage;
