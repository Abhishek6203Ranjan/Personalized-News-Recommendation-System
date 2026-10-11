import { useState } from "react";

function LoginModal({ onClose, onSignup, onLoginSuccess, onForgotPassword }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async () => {

        if (!email || !password) {
            setMessage("Please enter email and password");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

               setMessage("Login successful!");

               localStorage.setItem(
                   "loggedInUser",
                    JSON.stringify(data.user)
               );

               console.log("Logged in user:", data.user);

               onLoginSuccess(data.user);

            } 
            else {

                setMessage(data.message);
            }

        } catch (error) {

            setMessage("Unable to connect to server");
        }
    };

    return (
        <div className="login-overlay">

            <div className="login-modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ×
                </button>

                <h2>Login to Newsly</h2>

                <p className="login-subtitle">
                    Login to get personalized news recommendations
                </p>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                

                <button
                    className="login-submit"
                    onClick={handleLogin}
                >
                    Login
                </button>


                <button
                   className="forgot-password"
                   onClick={onForgotPassword}
                >
                    Forgot Password?
                </button>

                {message && (
                    <p className="signup-message">
                        {message}
                    </p>
                )}

                <p className="signup-text">
                    Don't have an account?{" "}
                    <span onClick={onSignup}>
                        Sign Up
                    </span>
                </p>

                <button
                    className="maybe-later"
                    onClick={onClose}
                >
                    Maybe Later
                </button>

            </div>

        </div>
    );
}

export default LoginModal;