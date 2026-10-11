import { useState } from "react";
import "./App.css";
import NewsCard from "./components/NewsCard";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";
import ForgotPasswordModal from "./components/ForgotPasswordModal";

function App() {

  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(() => {
       const savedUser = localStorage.getItem("loggedInUser");

       return savedUser ? JSON.parse(savedUser) : null;
  });
  const [showForgotPassword, setShowForgotPassword] = useState(false);


  

    const latestNews = [
    {
        title: "India prepares for major technological developments",
        description: "New developments are creating opportunities across different sectors.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
        category: "Latest",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Global markets respond to latest economic updates",
        description: "Markets around the world react to new economic developments.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
        category: "Business",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "New innovations are changing the technology industry",
        description: "Technology companies continue to introduce new products and services.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        category: "Technology",
        source: "Newsly",
        date: "Today"
    }
];
    

    const indiaNews = [
    {
        title: "India announces new digital initiatives",
        description: "New digital initiatives aim to improve services and connectivity.",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
        category: "India",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Indian startups continue to expand",
        description: "Startups across India are working on new products and technologies.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
        category: "India",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "New infrastructure projects announced in India",
        description: "Several infrastructure projects are being planned across different regions.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        category: "India",
        source: "Newsly",
        date: "Today"
    }
];

    const technologyNews = [
    {
        title: "New technology trends to watch",
        description: "Several emerging technologies are attracting attention worldwide.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        category: "Technology",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Smart devices are becoming more advanced",
        description: "Manufacturers are introducing new features in smart devices.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        category: "Technology",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Technology companies invest in new innovations",
        description: "Companies are increasing investment in research and development.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        category: "Technology",
        source: "Newsly",
        date: "Today"
    }
];

    const aiNews = [
    {
        title: "Artificial Intelligence continues to evolve",
        description: "AI systems are being used in an increasing number of applications.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        category: "AI",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "New AI tools are changing productivity",
        description: "AI-powered tools are helping users automate everyday tasks.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
        category: "AI",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "AI research reaches new milestones",
        description: "Researchers continue to develop new approaches to artificial intelligence.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
        category: "AI",
        source: "Newsly",
        date: "Today"
    }
];

    const sportsNews = [
    {
        title: "Major sporting events attract global attention",
        description: "Fans around the world are following the latest sporting events.",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
        category: "Sports",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Teams prepare for upcoming competitions",
        description: "Athletes and teams are preparing for important upcoming matches.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        category: "Sports",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Young athletes make their mark",
        description: "A new generation of athletes is emerging across different sports.",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
        category: "Sports",
        source: "Newsly",
        date: "Today"
    }
];

    const worldNews = [
    {
        title: "Global leaders discuss major international issues",
        description: "Leaders from different countries discuss important global developments.",
        image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
        category: "World",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Countries strengthen international cooperation",
        description: "Nations continue to work together on global challenges.",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
        category: "World",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "New developments shape global relations",
        description: "Recent developments are influencing relations between countries.",
        image: "https://images.unsplash.com/photo-1495020689067-958852a7765e",
        category: "World",
        source: "Newsly",
        date: "Today"
    }
];


const politicsNews = [
    {
        title: "Government discusses new policy initiatives",
        description: "New policy proposals are being discussed on important national issues.",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
        category: "Politics",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Parliament discusses important national matters",
        description: "Lawmakers discuss several issues affecting the country.",
        image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f",
        category: "Politics",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Political developments gain public attention",
        description: "Recent political developments are being closely followed by citizens.",
        image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
        category: "Politics",
        source: "Newsly",
        date: "Today"
    }
];


const businessNews = [
    {
        title: "Indian businesses explore new growth opportunities",
        description: "Businesses are exploring new markets and investment opportunities.",
        image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa",
        category: "Business",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Markets react to latest economic developments",
        description: "Investors continue to monitor important economic developments.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
        category: "Business",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Startups attract attention from investors",
        description: "Growing startups continue to attract investment and new opportunities.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
        category: "Business",
        source: "Newsly",
        date: "Today"
    }
];


const entertainmentNews = [
    {
        title: "New movies and shows attract audiences",
        description: "New entertainment releases are gaining attention from viewers.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
        category: "Entertainment",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Entertainment industry prepares for new releases",
        description: "Several new movies and shows are scheduled for release.",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
        category: "Entertainment",
        source: "Newsly",
        date: "Today"
    },
    {
        title: "Music and entertainment events draw attention",
        description: "Fans are following the latest developments in music and entertainment.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
        category: "Entertainment",
        source: "Newsly",
        date: "Today"
    }
];


const categoryData = {
    India: indiaNews,
    World: worldNews,
    Politics: politicsNews,
    Technology: technologyNews,
    AI: aiNews,
    Sports: sportsNews,
    Business: businessNews,
    Entertainment: entertainmentNews
};

const allNews = [
    ...latestNews,
    ...indiaNews,
    ...worldNews,
    ...politicsNews,
    ...technologyNews,
    ...aiNews,
    ...sportsNews,
    ...businessNews,
    ...entertainmentNews
];


    return (
        <div className="app">

            {/* Header */}


            {loggedInUser && (
            <h2 className="welcome-heading">
                Hi, {loggedInUser.name} 👋
            </h2>
        )}

            <header className="header">

                <div className="logo">
                    Newsly
                </div>

                <div className="search-box">

                    <input
                        type="text"
                        placeholder="Search news..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <button onClick={() => setSelectedCategory("Search")}>
                        Search
                    </button>

                </div>

                {loggedInUser ? (
                    <button
                        className="login-btn"
                        onClick={() => {
                            localStorage.removeItem("loggedInUser");
                            setLoggedInUser(null);
                        }}
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        className="login-btn"
                        onClick={() => setShowLogin(true)}
                    >
                       Login
                    </button>
                )}

            </header>


            {/* Category Navigation */}

            <nav className="category-nav">

    <button
        className={selectedCategory === "Home" ? "active-category" : ""}
        onClick={() => setSelectedCategory("Home")}
    >
        Home
    </button>

    <button
        className={selectedCategory === "India" ? "active-category" : ""}
        onClick={() => setSelectedCategory("India")}
    >
        India
    </button>

    <button
        className={selectedCategory === "World" ? "active-category" : ""}
        onClick={() => setSelectedCategory("World")}
    >
        World
    </button>

    <button
        className={selectedCategory === "Politics" ? "active-category" : ""}
        onClick={() => setSelectedCategory("Politics")}
    >
        Politics
    </button>

    <button
        className={selectedCategory === "Technology" ? "active-category" : ""}
        onClick={() => setSelectedCategory("Technology")}
    >
        Technology
    </button>

    <button
        className={selectedCategory === "AI" ? "active-category" : ""}
        onClick={() => setSelectedCategory("AI")}
    >
        AI
    </button>

    <button
        className={selectedCategory === "Sports" ? "active-category" : ""}
        onClick={() => setSelectedCategory("Sports")}
    >
        Sports
    </button>

    <button
        className={selectedCategory === "Business" ? "active-category" : ""}
        onClick={() => setSelectedCategory("Business")}
    >
        Business
    </button>

    <button
        className={selectedCategory === "Entertainment" ? "active-category" : ""}
        onClick={() => setSelectedCategory("Entertainment")}
    >
        Entertainment
    </button>

    <button>
        More
    </button>

</nav>


            {/* Main Content */}

            <main className="main-content">

    {selectedNews ? (

        <section className="news-detail">

            <button
                className="back-btn"
                onClick={() => setSelectedNews(null)}
            >
                ← Back to News
            </button>

            <div className="news-detail-card">

                <div className="news-detail-info">
                    <span>{selectedNews.category}</span>
                    <span>{selectedNews.date}</span>
                </div>

                <h1>{selectedNews.title}</h1>

                <div className="news-detail-source">
                    Source: {selectedNews.source}
                </div>

                <img
                    className="news-detail-image"
                    src={selectedNews.image}
                    alt={selectedNews.title}
                />

                <p className="news-detail-description">
                    {selectedNews.description}
                </p>

                

            </div>

        </section>

    ) : selectedCategory === "Search" ? (

        <section className="news-section">

            <h2>Search Results</h2>

            <div className="news-grid">

                {allNews
                    .filter((news) =>
                        news.title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    )
                    .map((news, index) => (
                        <NewsCard
                            key={index}
                            news={news}
                            onClick={setSelectedNews}
                        />
                    ))
                }

              

            </div>

        </section>

    ) : selectedCategory === "Home" ? (

        <>
            <section className="news-section">

                <h2>Latest News</h2>

                <div className="news-grid">

                    {latestNews.map((news, index) => (
                        <NewsCard
                            key={index}
                            news={news}
                            onClick={setSelectedNews}
                        />
                    ))}

                </div>

            </section>


            <section className="news-section">

                <h2>India</h2>

                <div className="news-grid">

                    {indiaNews.map((news, index) => (
                        <NewsCard
                            key={index}
                            news={news}
                            onClick={setSelectedNews}
                        />
                    ))}

                </div>

            </section>


            <section className="news-section">

                <h2>Technology</h2>

                <div className="news-grid">

                    {technologyNews.map((news, index) => (
                        <NewsCard
                            key={index}
                            news={news}
                            onClick={setSelectedNews}
                        />
                    ))}

                </div>

            </section>


            <section className="news-section">

                <h2>AI</h2>

                <div className="news-grid">

                    {aiNews.map((news, index) => (
                        <NewsCard
                            key={index}
                            news={news}
                            onClick={setSelectedNews}
                        />
                    ))}

                </div>

            </section>


            <section className="news-section">

                <h2>Sports</h2>

                <div className="news-grid">

                    {sportsNews.map((news, index) => (
                        <NewsCard
                            key={index}
                            news={news}
                            onClick={setSelectedNews}
                        />
                    ))}

                </div>

            </section>
        </>

    ) : (

        <section className="news-section">

            <h2>{selectedCategory}</h2>

            <div className="news-grid">

                {categoryData[selectedCategory]?.map((news, index) => (
                    <NewsCard
                        key={index}
                        news={news}
                        onClick={setSelectedNews}
                    />
                ))}

            </div>

        </section>

    )}

</main>




{showLogin && (
    <LoginModal
        onClose={() => setShowLogin(false)}
        onSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
        }}

        onLoginSuccess={(user) => {
            setLoggedInUser(user);
            setShowLogin(false)
        }}

        onForgotPassword={() => {
        setShowLogin(false);
        setShowForgotPassword(true);
    }}
    />
)}

{showSignup && (
    <SignUpModal
        onClose={() => setShowSignup(false)}
        onLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
        }}
    />
)}

{showForgotPassword && (
    <ForgotPasswordModal
        onClose={() => {
            setShowForgotPassword(false);
            setShowLogin(true);
        }}
    />
)}



        </div>
    );
}

export default App;