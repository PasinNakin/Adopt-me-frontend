import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function LoginForm() {
    return (
        <form className="text-center">
            <div className="flex flex-col items-center">
                <Input text="Email" placeholder="email" />
                <Input text="password" placeholder="password" />
            </div>
            <Button>Login</Button>
        </form>
    );
}
