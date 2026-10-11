import { useState } from "react";

function ForgotPasswordModal({ onClose }) {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailVerified, setEmailVerified] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Email verify karna
    const handleSubmit = async () => {

        if (!email) {
            setMessage("Please enter your email");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/forgot-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                setMessage(data.message);
                setEmailVerified(true);

            } else {

                setMessage(data.message);

            }

        } catch (error) {

            setMessage("Unable to connect to server");

        }
    };

    // Password reset karna
    const handleResetPassword = async () => {

        if (!newPassword || !confirmPassword) {
            setMessage("Please fill both password fields");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/reset-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        newPassword
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                setMessage("Password reset successfully!");

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

                <h2>Forgot Password?</h2>

                <p className="login-subtitle">
                    Enter your registered email to reset your password
                </p>

                {!emailVerified ? (

                    <>
                        <input
                            type="email"
                            placeholder="Enter your registered email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            className="login-submit"
                            onClick={handleSubmit}
                        >
                            Continue
                        </button>
                    </>

                ) : (

                    <>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button
                            className="login-submit"
                            onClick={handleResetPassword}
                        >
                            Reset Password
                        </button>
                    </>

                )}

                {message && (
                    <p className="signup-message">
                        {message}
                    </p>
                )}

                <button
                    className="maybe-later"
                    onClick={onClose}
                >
                    Back to Login
                </button>

            </div>

        </div>
    );
}

export default ForgotPasswordModal;