import { useState } from "react";

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
    <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-semibold mb-4">Enter Your Makeup Products</h2>
      
      <div className="flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter product name"
          className="flex-1 px-3 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
        />
        <button
          onClick={handleAddProduct}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-white font-medium"
        >
          Add
        </button>
      </div>

      {products.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Your Products:</h3>
          <ul className="list-disc pl-6 space-y-1">
            {products.map((p, index) => (
              <li key={index} className="text-gray-300">{p}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleGenerateRoutine}
        className="mt-4 bg-green-600 hover:bg-green-500 px-6 py-2 rounded-md text-white font-medium w-full"
        disabled={products.length === 0}
      >
        Generate Routine
      </button>

      {error && <p className="text-red-400 mt-2">{error}</p>}

      {routine?.routine && (
        <div className="mt-6 p-4 bg-gray-900 rounded-md">
          <h3 className="text-lg font-medium mb-2">Your Personalized Skincare Routine</h3>
          <ul className="list-decimal list-inside space-y-1">
            {routine.routine.map((step, index) => (
              <li key={index} className="text-gray-300">{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
