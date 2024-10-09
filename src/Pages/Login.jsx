import React from "react"
import '../Styles/User/Signup.css'
import SignIn from "../Components/Signin/signin"

export default function LoginPage() {
    return(
        <div className="signup-page">
            <div className="signup-wrapper">
                <h1>Login</h1>
                <SignIn />
            </div>
        </div>
    )
}