import type { NextApiRequest, NextApiResponse } from "next";

// Define the response data type
type RoutineResponse = {
  message?: string;
  routine?: string[];
  error?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<RoutineResponse>) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method is allowed" });
  }

  const { products } = req.body;

  if (!products || !Array.isArray(products)) {
    return res.status(400).json({ error: "Invalid input. Expected an array of products." });
  }

  // Define the routine steps
  const steps = [
    "Cleanse with",
    "Apply toner with",
    "Moisturize with",
    "Apply sunscreen with",
  ];

  if (products.length < steps.length) {
    return res.status(400).json({ error: "Not enough products to complete the routine." });
  }

  // Generate the routine
  const routine = steps.map((step, index) => `${index + 1}. ${step} ${products[index]}`);

  res.status(200).json({
    message: "This is your personalized skincare routine!",
    routine,
  });
}
