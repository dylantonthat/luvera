import { title } from "@/components/primitives";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Loader2, Upload } from "lucide-react";

async function analyzeSkin(imageFile: File) {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await fetch("/api/analyzeSkin", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();
    console.log("Skin Analysis Result:", data);
    return data;
}

export default function Assessment() {

    const [firstName, setFirstName] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any | null>(null);
      
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const uploadedFile = event.target.files?.[0];
      if (!uploadedFile) return;
  
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(uploadedFile.type)) {
        setError("Invalid file type. Please upload a JPG, JPEG, or PNG.");
        return;
      }
  
      if (uploadedFile.size > 3 * 1024 * 1024) {
        setError("File size too large. Please upload an image under 3MB.");
        return;
      }
  
      setFile(uploadedFile);
      setError(null);
    };
  
    const handleSubmit = () => {
      if (!firstName) {
        setError("Please enter your first name.");
        return;
      }
      if (!file) {
        setError("Please upload a frontal face image.");
        return;
      }
      
      setLoading(true);
      setError(null);
  
      analyzeSkin(file).then((data) => {
        console.log(data)
      });
  
      setTimeout(() => {
        setResults({
          message: `Hi ${firstName}, based on our analysis, here are your skincare insights!`,
          issues: [
            {
              name: "Dry Skin",
              recommendations: [
                {
                  name: "CeraVe Moisturizing Cream",
                  price: "$14.99",
                  link: "https://www.example.com/cerave",
                  ingredients: ["Hyaluronic Acid", "Ceramides"],
                  studies: [
                    {
                      title: "Hyaluronic Acid and Skin Hydration",
                      link: "https://www.ncbi.nlm.nih.gov/pubmed/12345678",
                    },
                  ],
                },
                {
                  name: "La Roche-Posay Toleriane Hydrating Cleanser",
                  price: "$16.99",
                  link: "https://www.example.com/lrp",
                  ingredients: ["Niacinamide", "Glycerin"],
                  studies: [
                    {
                      title: "Niacinamide's Role in Skin Barrier Repair",
                      link: "https://www.ncbi.nlm.nih.gov/pubmed/23456789",
                    },
                  ],
                },
              ],
            },
          ],
        });
        setLoading(false);
      }, Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000);
    };

    return (
        <div className="min-h-screen bg-background flex justify-center items-center px-4">
          <div className="mt-6 max-w-lg w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6">
            <h1 className={title()}>Skin Assessment</h1>
      
            <div className="mt-6 space-y-6">
              {/* Name Input */}
              <Input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="text-lg"
              />
      
              {/* File Upload Section */}
              <div className="border border-dashed border-gray-400 p-6 rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer">
                <label>
                  <Upload className="mx-auto h-8 w-8 text-gray-600" />
                  <p className="text-gray-600 mt-2">Upload your frontal face photo</p>
                  <input type="file" className="hidden" accept=".jpg,.jpeg,.png" onChange={handleFileUpload} />
                </label>
              </div>
      
              {/* Feedback Messages */}
              {file && <p className="text-sm text-green-600 text-center">✅ Image uploaded successfully!</p>}
              {error && <p className="text-sm text-red-600 text-center">{error}</p>}
      
              {/* Analyze Button (Centered) */}
              <div className="flex justify-center">
                <Button className="font-semibold w-full max-w-xs py-3" onPress={handleSubmit} disabled={loading}>
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Analyze"}
                </Button>
              </div>
            </div>
      
            {/* Loading State */}
            {loading && <p className="mt-4 text-center text-gray-500">🔍 Analyzing your skin...</p>}
      
            {/* Results Section */}
            {results && (
              <Card className="mt-6 shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
                <CardBody>
                  <h2 className="text-xl font-semibold text-center">{results.message}</h2>
                  {results.issues.map((issue: any, index: number) => (
                    <div key={index} className="mt-4">
                      <h3 className="text-lg font-bold text-blue-500">{issue.name}</h3>
                      {issue.recommendations.map((rec: any, idx: number) => (
                        <a key={idx} href={rec.link} target="_blank" className="block mt-2 border p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition">
                          <p className="font-semibold">{rec.name} - {rec.price}</p>
                          <p className="text-sm mt-1">✨ Helpful Ingredients: {rec.ingredients.join(", ")}</p>
                          <p className="text-xs text-gray-500 mt-1">🔬 Research supporting these ingredients:</p>
                          {rec.studies.map((study: any, studyIdx: number) => (
                            <p key={studyIdx} className="text-xs text-blue-400 underline">{study.title}</p>
                          ))}
                        </a>
                      ))}
                    </div>
                  ))}
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      );            
    }
