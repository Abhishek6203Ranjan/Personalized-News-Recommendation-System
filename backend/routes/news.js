
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const category = req.query.category || "general";

        const url = new URL("https://newsapi.org/v2/top-headlines");

        url.searchParams.set("country", "us");
        url.searchParams.set("pageSize", "20");
        url.searchParams.set("apiKey", process.env.NEWS_API_KEY);

        if (category !== "general") {
            url.searchParams.set("category", category);
        }

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || data.status !== "ok") {
            return res.status(response.status || 500).json({
                message: data.message || "Unable to fetch news"
            });
        }

        res.json(data.articles);

    } catch (error) {
        console.error("News API error:", error.message);

        res.status(500).json({
            message: "Server error while fetching news"
        });
    }
});

module.exports = router;
