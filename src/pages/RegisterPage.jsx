import React from "react";

import RegisterForm from "../features/auth/components/RegisterForm";

import PageLayout from "../layouts/PageLayout";
import PicLayout from "../layouts/PicLayout";

export default function RegisterPage() {
    return (
        <PageLayout>
            <PicLayout src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <RegisterForm />
        </PageLayout>
    );
}
