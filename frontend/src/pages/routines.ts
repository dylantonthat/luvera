import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

interface Product {
  name: string;
  price: string;
  rating: number;
  link: string;
}

interface SkinConcern {
  concern: string;
  recommendations: Product[];
}

interface RoutineResponse {
  message?: string;
  routine?: string[];
  error?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<RoutineResponse>) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method is allowed" });
  }

  console.log("🔍 Raw Request Body:", req.body); // ✅ Check if `req.body` is empty or undefined

  if (!req.body || Object.keys(req.body).length === 0) {
    console.error("🚨 Request body is missing or empty:", req.body);
    return res.status(400).json({ error: "Request body is empty. Make sure Content-Type is set to application/json." });
  }

  const { selectedConcerns } = req.body;

  if (!selectedConcerns || !Array.isArray(selectedConcerns) || selectedConcerns.length === 0) {
    console.error("🚨 Invalid Input:", req.body);
    return res.status(400).json({ error: "Invalid input. Expected a non-empty array of skin concerns." });
  }

  // Load JSON data
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8")) as { skinConcerns: SkinConcern[] };

  // Find relevant products based on selected concerns
  const selectedProducts: Product[] = [];
  selectedConcerns.forEach(concern => {
    const concernData = jsonData.skinConcerns.find(c => c.concern === concern);
    if (concernData) {
      selectedProducts.push(...concernData.recommendations.slice(0, 2)); // Pick top 2 recommendations
    }
  });

  if (selectedProducts.length === 0) {
    return res.status(400).json({ error: "No matching products found for selected concerns." });
  }

  // Define a flexible skincare routine
  const routineSteps = [
    "Cleanse with",
    "Apply treatment serum",
    "Moisturize with",
    "Protect with sunscreen"
  ];

  const routine = selectedProducts.slice(0, routineSteps.length).map((product, index) => 
    `${index + 1}. ${routineSteps[index]}: ${product.name} (${product.price}, ⭐${product.rating}) [Buy](${product.link})`
  );

  console.log("✅ Generated Routine:", routine); // ✅ Debugging: Log generated routine

  res.status(200).json({ message: "Here is your personalized skincare routine!", routine });
}
