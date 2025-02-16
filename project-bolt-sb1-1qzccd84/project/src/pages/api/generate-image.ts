import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    const invoke_url = "https://ai.api.nvidia.com/v1/genai/stabilityai/stable-diffusion-3-medium";

    const headers = {
        "Authorization": `Bearer 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`,
        "Accept": "application/json",
        "Content-Type": "application/json"
    };

    const payload = {
        "prompt": prompt,
        "cfg_scale": 5,
        "aspect_ratio": "16:9",
        "seed": 0,
        "steps": 50,
        "negative_prompt": ""
    };

    try {
        const response = await fetch(invoke_url, {
            method: "POST",
            headers,
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}
