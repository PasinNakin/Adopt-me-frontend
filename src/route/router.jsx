import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import DogProfile from "../pages/DogProfile";
import AllDogPage from "../pages/AllDogPage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import CreateDogProfilePage from "../pages/CreateDogProfilePage";
import ProtectRoute from "../features/auth/components/ProtectRoute";

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
        path: "/alldog",
        element: <AllDogPage />,
    },
    {
        path: "/createdog",
        element: (
            <ProtectRoute>
                <CreateDogProfilePage />
            </ProtectRoute>
        ),
    },
]);
export default function Router() {
    return <RouterProvider router={router} />;
}
