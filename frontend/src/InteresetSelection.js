function InterestSelection({ onContinue }) {
    const interests = [
        "India",
        "World",
        "Politics",
        "Technology",
        "AI",
        "Sports",
        "Business",
        "Entertainment",
        "Science"
    ];

    return (
        <div className="login-overlay">

            <div className="login-modal interest-modal">

                <h2>Select Your Interests</h2>

                <p className="login-subtitle">
                    Choose topics you want to see more of
                </p>

                <div className="interest-options">

                    {interests.map((interest) => (
                        <button
                            key={interest}
                            className="interest-option"
                        >
                            {interest}
                        </button>
                    ))}

                </div>

                <button
                    className="login-submit"
                    onClick={onContinue}
                >
                    Continue
                </button>

            </div>

        </div>
    );
}

export default InterestSelection;