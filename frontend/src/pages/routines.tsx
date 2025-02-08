import { useState } from "react";
import productsData from "../data/products.json";

interface Product {
  name: string;
  price: string;
  rating: number;
  link: string;
}

interface Step {
  step: string;
  products: Product[];
}

export default function Routine() {
  const [routine, setRoutine] = useState<Product[]>([]);

  const generateRoutine = () => {
    const selectedRoutine = productsData.steps.map((step: Step) => {
      return step.products[Math.floor(Math.random() * step.products.length)];
    });

    setRoutine(selectedRoutine);
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col items-center p-10">
      <h1 className="text-4xl font-serif text-brand-dark">Your Personalized Skincare Routine</h1>
      <button 
        onClick={generateRoutine}
        className="mt-6 bg-brand-dark text-white px-6 py-3 rounded-full text-lg"
      >
        Generate Routine
      </button>

      {routine.length > 0 && (
        <div className="mt-6 w-full max-w-lg p-6 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-xl font-medium mb-3">Your Routine</h3>
          <ul className="list-disc text-left text-brand-dark space-y-2">
            {routine.map((product, index) => (
              <li key={index}>
                <strong>{product.name}</strong> ({product.price}, ⭐{product.rating}) -{" "}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Buy Here
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
