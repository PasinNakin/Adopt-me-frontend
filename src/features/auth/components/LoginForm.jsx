import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function LoginForm() {
    return (
        <form className="text-center ">
            <div className="flex flex-col items-center pb-8">
                <Input text="Email" placeholder="email" name="email" />
                <Input
                    text="password"
                    placeholder="password"
                    name="password"
                    type="password"
                />
            </div>
            <Button>Login</Button>
        </form>
    );
}
//                  name="mobile"
//                 value={input.mobile}
//                 text="Mobile"
//                 placeholder="mobile"
//                 onChange={handleChangeInput}
//                 errorMessage={error.mobile}
