import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import Spinner from "./components/Spinner.jsx";
import DogContextProvider from "./features/dog/Context/DogContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <AuthContextProvider>
        <DogContextProvider>
            {/* <Spinner> */}
            <App />
            {/* </Spinner> */}
        </DogContextProvider>
    </AuthContextProvider>
    // </React.StrictMode>
);
