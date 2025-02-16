import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const API_URL = "https://ai.api.nvidia.com/v1/genai/stabilityai/stable-diffusion-3-medium";
const API_KEY = process.env.API_KEY; // Store in .env file

app.post("/api/generate-image", async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await axios.post(
            API_URL,
            {
                prompt,
                cfg_scale: 5,
                aspect_ratio: "16:9",
                seed: 0,
                steps: 50,
                negative_prompt: ""
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("API Response:", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch image" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
