import { useState } from "react";

function SignUpModal({ onClose, onLogin }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async () => {

        if (!name || !email || !password || !confirmPassword) {
            setMessage("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                setMessage("Account created successfully!");
            } else {
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

                <h2>Create Your Account</h2>

                <p className="login-subtitle">
                    Sign up to get personalized news recommendations
                </p>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                    className="login-submit"
                    onClick={handleSignup}
                >
                    Sign Up
                </button>

                {message && (
                    <p className="signup-message">
                        {message}
                    </p>
                )}

                <p className="signup-text">
                    Already have an account?{" "}
                    <span onClick={onLogin}>
                        Login
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

export default SignUpModal;