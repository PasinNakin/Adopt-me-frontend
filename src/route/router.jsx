import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import DogProfile from "../pages/DogProfile";
import AllDogPage from "../pages/AllDogPage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";

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
        path: "/dogprofile",
        element: <DogProfile />,
    },
    {
        path: "/alldog",
        element: <AllDogPage />,
    },
]);
export default function Router() {
    return <RouterProvider router={router} />;
}
