import { useState } from "react";
import useDog from "../../../hooks/use-dog";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import Modal from "../../../components/Modal";
import EditDogForm from "./EditDogForm";
import useAdopt from "../../../hooks/use-adopt";
import { toast } from "react-toastify";

export default function ProfileDogContainer() {
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [isCancel, setIsCancel] = useState(true);

    const { dog, deleteDog, relation, approveDog } = useDog();
    const { createAdopt, cancelAdopt } = useAdopt();
    const { authUser } = useAuth();
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteDog(dog.id);
        navigate("/allDog");
    };

    const handleAdoptClick = async (id) => {
        try {
            const data = {
                dogId: id,
            };
            await createAdopt(data);
            window.location.reload(false);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCancelAdopt = async () => {
        await cancelAdopt(dog.id);
        window.location.reload(false);
    };
    const handleApproveAdopt = async () => {
        await approveDog(dog.id);
        navigate("/allDog");
    };

    return (
        <div>
            <div className="max-w-[40%]  mx-auto relative">
                <img
                    className=" object-cover  rounded-[10%] mx-auto mb-10 h-[45vh] w-[30vw]"
                    src={dog?.profileImage}
                    alt="dogImage"
                />
                {authUser?.role === "ADMIN" && (
                    <div className="flex flex-col absolute top-20 -right-40 gap-6">
                        <Button onClick={() => setOpen(true)}>
                            Edit Profile
                        </Button>
                        <Button
                            colorB="red"
                            onClick={() => setOpenDelete(true)}
                        >
                            delete Profile
                        </Button>
                    </div>
                )}
                <div className=" bg-white absolute left-0 right-0 bottom-8 mx-auto w-fit px-4  font-bold text-orange-500 text-center text-[2rem] opacity-70 rounded-3xl pb-1">
                    {dog.name}
                </div>
            </div>

            <div className="flex justify-between gap-4 bg-[#1D2144] p-10 mb-10 text-center rounded-3xl text-lg text-white">
                <div className="flex flex-col gap-4 mx-auto bg-[#272D51] w-[40%] p-4 pb-10 rounded-3xl items-center ">
                    <h1 className="text-[2rem] p-4 font-medium">description</h1>
                    <div className=" border-b-2 border-orange-500 w-[80%] rounded-xl mb-4 "></div>
                    {dog?.description ? (
                        <span className="w-[80%] ">{dog?.description}</span>
                    ) : (
                        <span>--no description--</span>
                    )}
                    <Button onClick={() => navigate("/allDog")}>
                        back to all dog
                    </Button>
                </div>

                <div className="flex flex-col gap-4 mx-auto bg-[#272D51] w-[40%] p-4 pb-10 rounded-3xl items-center ">
                    <div className="text-[2rem] p-4 font-medium">Stats</div>
                    <div className=" border-b-2 border-orange-500 w-[80%] rounded-xl mb-4"></div>
                    <span>Name : {dog?.name}</span>
                    <span>Age : {dog.age?.toLowerCase()}</span>
                    <span>Gender : {dog.gender?.toLowerCase()}</span>
                    <span>Breed : {dog.breed?.dogBreed}</span>

                    {dog?.status === "AVAILABLE" &&
                    authUser?.role === "USER" ? (
                        <Button onClick={() => handleAdoptClick(dog.id)}>
                            Need Adopt
                        </Button>
                    ) : (
                        dog?.status === "PENDING" && (
                            <div className="bg-slate-500 p-2 rounded-2xl">
                                -Pending-
                            </div>
                        )
                    )}

                    {relation?.adopt?.length > 0 &&
                        dog.status !== "ADOPTED" &&
                        authUser?.id === relation?.adopt[0]?.userId &&
                        isCancel && (
                            <Button onClick={handleCancelAdopt}>
                                Cancel Adopt
                            </Button>
                        )}

                    {authUser?.role === "ADMIN" &&
                        dog?.status === "PENDING" && (
                            <div className="flex gap-5">
                                <Button onClick={handleApproveAdopt}>
                                    Approve
                                </Button>
                                <Button onClick={handleCancelAdopt}>
                                    Disapprove
                                </Button>
                            </div>
                        )}
                </div>
            </div>

            {/* //////Edit Modal///// */}
            {open && (
                <Modal
                    headText="Change Me"
                    overFlow="overflow-y-scroll"
                    onClose={() => setOpen(false)}
                >
                    <EditDogForm onClose={() => setOpen(false)} />
                </Modal>
            )}

            {/* //////Delete Modal///// */}
            {openDelete && (
                <Modal
                    headText="Are you sure to delete me"
                    onClose={() => setOpenDelete(false)}
                >
                    <div className="flex flex-col items-center gap-10 pt-10">
                        <Button width={40} onClick={handleDelete}>
                            Delete
                        </Button>
                        <Button width={40} onClick={() => setOpenDelete(false)}>
                            cancel
                        </Button>
                    </div>
                </Modal>
            )}
        </div>
    );
}
