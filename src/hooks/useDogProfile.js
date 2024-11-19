import { useState, useEffect } from "react";
import * as dogApi from "../api/dog";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAdopt from "./use-adopt";
import { useParams } from "react-router-dom";

export default function useDogProfile(setIsCancel) {
    const [dog, setDog] = useState({});
    const [relation, setRelation] = useState({});
    const [loading, setLoading] = useState(true);
    const [isRequest, setIsRequest] = useState(false);

    const { dogId } = useParams();
    const { createAdopt, cancelAdopt } = useAdopt();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (dogId) {
                    const dogRes = await dogApi.getDogWithId(dogId);
                    setDog(dogRes.data.dogWithId);
                    const relationRes = await dogApi.getRelation(dogId);
                    setRelation(relationRes.data);
                }
            } catch (error) {
                console.log(error);
                toast.error("Failed to fetch dog profile");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [dogId, isRequest]);

    const handleDelete = async () => {
        try {
            await dogApi.deleteDog(dogId);
            navigate("/allDog/1");
            toast.success("Dog profile deleted successfully.");
        } catch (err) {
            toast.error("Failed to delete the dog profile.");
        }
    };

    const handleAdoptClick = async () => {
        try {
            await createAdopt({ dogId: dog.id });
            toggleRequest();
            toast.success("Adoption request sent successfully.");
        } catch (err) {
            console.log(err);
            toast.error("Failed to send adoption request.");
        }
    };

    const handleCancelAdopt = async () => {
        try {
            await cancelAdopt(dog.id);
            toggleRequest();
            toast.success("Adoption request canceled.");
        } catch (error) {
            toast.error("Failed to cancel adoption request.");
        }
    };
    const handleApproveAdopt = async () => {
        try {
            await dogApi.approveDogById(dog.id);
            toast.success("Adoption approved.");
            navigate("/allDog/1");
        } catch (error) {
            toast.error("Failed to approve adoption.");
        }
    };
    const updateDogProfile = (updatedDog) => {
        setDog(updatedDog);
    };

    const toggleRequest = () => {
        setIsRequest((prev) => !prev);
    };

    return {
        relation,
        loading,
        dog,
        handleAdoptClick,
        handleApproveAdopt,
        handleCancelAdopt,
        handleDelete,
        updateDogProfile,
    };
}
