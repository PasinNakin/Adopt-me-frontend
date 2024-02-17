import React from "react";
import HeaderNav from "../layouts/HeaderNav";
import CreateDogForm from "../features/dog/components/CreateDogForm";
import RegisterForm from "../features/auth/components/RegisterForm";

export default function CreateDogProfilePage() {
    return (
        <div>
            <HeaderNav />
            <div>
                <div className="bg-[#1D2144] p-10 "></div>
                <div className="bg-[#272D51] ">
                    <div className="flex justify-between">
                        <img
                            className="h-[92vh] "
                            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <CreateDogForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
