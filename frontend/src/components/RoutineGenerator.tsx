import { useState } from "react";

// Define types for state
interface RoutineResponse {
  routine?: string[];
  error?: string;
}

export default function RoutineGenerator() {
  const [products, setProducts] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [routine, setRoutine] = useState<RoutineResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAddProduct = () => {
    if (input.trim()) {
      setProducts([...products, input.trim()]);
      setInput("");
    }
  };

  const handleGenerateRoutine = async () => {
    setError(null);
    setRoutine(null);

    try {
      const response = await fetch("/api/routine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products }),
      });

      const data: RoutineResponse = await response.json();

      if (response.ok) {
        setRoutine(data);
      } else {
        setError(data.error || "An error occurred");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div>
      <h2>Enter Your Makeup Products</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter product name"
      />
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={handleGenerateRoutine} disabled={products.length === 0}>
        Generate Routine
      </button>

      <h3>Your Products:</h3>
      <ul>
        {products.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {routine?.routine && (
        <div>
          <h3>Your Personalized Skincare Routine</h3>
          <ul>
            {routine.routine.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
