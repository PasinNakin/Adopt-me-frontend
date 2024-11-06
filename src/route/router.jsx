import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import DogProfile from "../pages/DogProfile";
import AllDogPage from "../pages/AllDogPage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import CreateDogProfilePage from "../pages/CreateDogProfilePage";
import ProtectRoute from "../features/auth/components/ProtectRoute";
import UserAdoptPage from "../pages/UserAdoptPage";
import AdoptedPage from "../pages/AdoptedPage";
import EditUserProfilePage from "../pages/EditUserProfilePage";
import ProtectEditRoute from "../features/auth/components/ProtectEditRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/register",
        element: (
            <RedirectIfAuthenticated>
                <RegisterPage />
            </RedirectIfAuthenticated>
        ),
    },
    {
        path: "/profile/:dogId",
        element: <DogProfile />,
    },
    {
        path: "/alldog/:page",
        element: <AllDogPage />,
    },
    {
        path: "/adopted",
        element: <AdoptedPage />,
    },
    {
        path: "/myAdopt",
        element: <UserAdoptPage />,
    },
    {
        path: "/editUser",
        element: (
            <ProtectEditRoute>
                <EditUserProfilePage />
            </ProtectEditRoute>
        ),
    },
    {
        path: "/createdog",
        element: (
            <ProtectRoute>
                <CreateDogProfilePage />
            </ProtectRoute>
        ),
    },
    { path: "*", element: <HomePage /> },
]);
export default function Router() {
    return <RouterProvider router={router} />;
}
