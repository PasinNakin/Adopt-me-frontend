import React from "react";
import { useNavigate } from "react-router-dom";
import ExampleDogContainer from "../features/dog/components/ExampleDogContainer";

export default function HomePageLayout() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-[7vh] w-[80%] mx-auto pt-[6rem]">
            <div className="flex justify-between gap-2">
                <div className="text-white flex-1 flex flex-col gap-6 text-center justify-center items-center">
                    <div className=" font-black text-[3.5rem] leading-[70px]">
                        ADOPT ME <br />
                        HOOMAN
                    </div>
                    <div className="font-medium leading-8">
                        ร่วมเป็นส่วนหนึ่งของการช่วยเหลือและมอบโอกาสให้กับเหล่าสุนัข
                        <br />
                        ที่ถูกทอดทิ้ง ให้เขาได้โอกาสมีชีวิตที่ดีอีกครั้ง
                    </div>
                    <button
                        onClick={() => navigate("/allDog")}
                        className="btn btn-primary text-white w-fit "
                    >
                        ไปยังหน้ารับเลี้ยง
                    </button>
                </div>
                <div className="flex-1">
                    <img
                        className="w-[30vw] h-[46vh] mx-auto object-cover rounded-[10%]"
                        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="dogPic"
                    />
                </div>
            </div>
            <div className="text-white font-semibold text-xl pl-10">
                Our dog
            </div>
            <div className="flex pb-10">
                <ExampleDogContainer />
            </div>
        </div>
    );
}
