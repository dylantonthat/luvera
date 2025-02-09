import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@gradio/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { image } = req.body; // Expecting a base64 string or file URL from frontend

        if (!image) {
            return res.status(400).json({ error: "No image provided" });
        }

        const prompt = "Analyze the person's skin in the image and identify any present skin concerns. Only respond with a JSON array containing any of the following categories if applicable: 'Dry Skin', 'Acne', 'Hyperpigmentation', 'Oily Skin', 'Sensitive Skin'. If no issues are detected, return an empty array ([]) with no additional text.";
        
        const client = await Client.connect("deepseek-ai/Janus-Pro-7B");
        const result = await client.predict("/multimodal_understanding", { 
            image, // Pass the image (could be a URL or base64 depending on Gradio's support)
            question: prompt, 		
            seed: 3, 		
            top_p: 0, 		
            temperature: 0, 
        });

        return res.status(200).json({ data: result.data });

    } catch (error) {
        console.error("Error analyzing skin:", error);
        return res.status(500).json({ error: "Failed to analyze skin" });
    }
}
