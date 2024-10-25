import React from "react";
import PageLayout from "../layouts/PageLayout";
import EditUserForm from "../features/auth/components/EditUserForm";

function EditUserProfilePage() {
    return (
        <>
            <PageLayout>
                <EditUserForm />
            </PageLayout>
        </>
    );
}

export default EditUserProfilePage;
