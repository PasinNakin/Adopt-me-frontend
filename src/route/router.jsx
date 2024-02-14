import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import DogProfile from "../pages/DogProfile";
import AllDogPage from "../pages/AllDogPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
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
