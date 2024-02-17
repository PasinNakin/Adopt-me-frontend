import { useState } from "react";
import Router from "./route/router";
import { ToastContainer, toast, Slide } from "react-toastify";

function App() {
    return (
        <>
            <Router />
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                theme="colored"
                transition={Slide}
            />
        </>
    );
}

export default App;
