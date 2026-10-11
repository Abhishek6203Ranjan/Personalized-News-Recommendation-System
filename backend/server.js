const envResult = require("dotenv").config();

console.log("Variables found in .env:", Object.keys(envResult.parsed || {}));
console.log("NEWS_API_KEY loaded:", Boolean(process.env.NEWS_API_KEY));

console.log(
    "NEWS_API_KEY loaded:",
    Boolean(process.env.NEWS_API_KEY),
    "Length:",
    process.env.NEWS_API_KEY?.trim().length
);

const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const authRoutes = require("./routes/auth");
const newsRoutes = require("./routes/news");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);

app.get("/", (req, res) => {
    res.send("Personalized News Backend is running!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

