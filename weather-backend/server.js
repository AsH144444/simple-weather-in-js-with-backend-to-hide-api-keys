const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/weather", async (req, res) => {
    try {
        const city = req.query.city;

        if (!city) {
            return res.status(400).json({
                error: "City is required"
            });
        }

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: data.message
            });
        }

        res.json(data);

    } catch (error) {
        console.error("Backend error:", error);

        res.status(500).json({
            error: "Server error"
        });
    }
});
app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});