import express from "express";
import pkg from "pg";
const { Client } = pkg;

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const API_URL =
  "https://ai.api.nvidia.com/v1/genai/stabilityai/stable-diffusion-3-medium";
const API_KEY = process.env.API_KEY; // Store in .env file

const pgClient = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_BrTS9YdoGW5a@ep-lucky-glade-a8jsvzdx-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
});
pgClient.connect();
const JWT_SECRET = "your_secret_key";


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
        negative_prompt: "",
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
app.post("/api/signup", async (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery =
      "INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING id;";
    await pgClient.query(insertQuery, [name, username, hashedPassword]);
    res.json({ message: "Sign up successful" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error: try again" });
  }
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const userQuery = "SELECT * FROM users WHERE username = $1;";
    const result = await pgClient.query(userQuery, [username]);
    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ message: "Sign in successful", token });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error: try again" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
