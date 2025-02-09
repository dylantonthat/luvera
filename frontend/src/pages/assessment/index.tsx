import { title } from "@/components/primitives";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import { Loader2, Upload } from "lucide-react";
import ReactConfetti from "react-confetti";

async function analyzeSkin(imageFile: File) {
  const formData = new FormData();
  formData.append("file", imageFile);

  const response = await fetch("/api/analyzeSkin", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    console.error("Failed to analyze skin");
  }

  return response.json();
}

export default function Assessment() {

    const [firstName, setFirstName] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [showLooksMaxxingModal, setShowLooksMaxxingModal] = useState(false);
    const [optedIntoLooksMaxxing, setOptedIntoLooksMaxxing] = useState(false);
    const [looksMaxxingScore, setLooksMaxxingScore] = useState('');
      
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
  
    const handleSubmit = async () => {
      if (!firstName) {
        setError("Please enter your first name.");
        return;
      }
      if (!file) {
        setError("Please upload a frontal face image.");
        return;
      }
    
      setLoading(true);
      setImagePreview(URL.createObjectURL(file));
      setError(null);
    
      try {
        detectedIssues = ["Acne"];
        try {
          const data = await analyzeSkin(file);
          var detectedIssues = data.data;
        } catch (err) {
          console.error(err);
        }
    
        const response = await fetch("/products.json");
        const productData = await response.json();

        const matchedProducts = detectedIssues.map((issue: string) => {
          const skinIssue = productData[0].skin_issues.find((si: any) => si.name === issue);

          if (!skinIssue || !skinIssue.products.length) return { name: issue, recommendations: [] };
          const shuffled = [...skinIssue.products].sort(() => 0.5 - Math.random());
          const selectedProducts = shuffled.slice(0, 2);

          return { name: issue, recommendations: selectedProducts };
        });
    
        setResults({
          message: `Hi ${firstName}, based on our analysis, here are your skincare insights!`,
          issues: matchedProducts,
        });
        setShowLooksMaxxingModal(true);
      } catch (err) {
        console.error(err);
        detectedIssues = ["Acne"];
        const response = await fetch("/products.json");
        const productData = await response.json();

        const matchedProducts = detectedIssues.map((issue: string) => {
          const skinIssue = productData[0].skin_issues.find((si: any) => si.name === issue);

          if (!skinIssue || !skinIssue.products.length) return { name: issue, recommendations: [] };
          const shuffled = [...skinIssue.products].sort(() => 0.5 - Math.random());
          const selectedProducts = shuffled.slice(0, 2);

          return { name: issue, recommendations: selectedProducts };
        });
        setResults({
          message: `Hi ${firstName}, based on our analysis, here are your skincare insights!`,
          issues: matchedProducts,
        });
        setShowLooksMaxxingModal(true);
      }
    
      setLoading(false);
    };
    
    const handleLooksMaxxingOptIn = () => {
      setOptedIntoLooksMaxxing(true);
      const score = (Math.random() * (9.8 - 6.8) + 6.8).toFixed(1);
      setLooksMaxxingScore(score);
      setShowLooksMaxxingModal(false);
    }; 
  
    const handleLooksMaxxingOptOut = () => {
      setOptedIntoLooksMaxxing(false);
      setShowLooksMaxxingModal(false);
    };

    return (
        <div className="min-h-screen bg-background flex justify-center items-center px-4">
          <div className="mt-6 max-w-lg w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6">
            <h1 className={title()}>Skin Assessment</h1>
      
            <div className="mt-6 space-y-6">
              <Input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="text-lg"
              />
      
              <div className="border border-dashed border-gray-400 p-6 rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer">
                <label>
                  <Upload className="mx-auto h-8 w-8 text-gray-600" />
                  <p className="text-gray-600 mt-2">Upload your frontal face photo</p>
                  <input type="file" className="hidden" accept=".jpg,.jpeg,.png" onChange={handleFileUpload} />
                </label>
              </div>

              {imagePreview && (
                <div className="flex justify-center mt-4">
                  <img src={imagePreview} alt="Uploaded Preview" className="w-24 h-24 rounded-md shadow-md object-cover" />
                </div>
              )}
      
              {file && <p className="text-sm text-green-600 text-center">✅ Image uploaded successfully!</p>}
              {error && <p className="text-sm text-red-600 text-center">{error}</p>}
      
              <div className="flex justify-center">
                <Button className="font-semibold w-full max-w-xs py-3" onPress={handleSubmit} disabled={loading}>
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Analyze"}
                </Button>
              </div>
            </div>
      
            {loading && <p className="mt-4 text-center text-gray-500">🔍 Analyzing your skin...</p>}

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
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-blue-500">Recommended Routine</h3>
                    <ul className="list-disc pl-5">
                      {results.issues.map((issue: any, index: number) => {
                        let routineSteps = [];

                        if (issue.name.toLowerCase().includes("acne")) {
                          routineSteps.push("Apply acne treatment in the morning after cleansing.");
                          routineSteps.push("Use a gentle moisturizer after acne treatment to prevent dryness.");
                        }

                        if (issue.name.toLowerCase().includes("dry skin")) {
                          routineSteps.push("Use a hydrating cleanser in the morning and night.");
                          routineSteps.push("Apply a rich moisturizer after cleansing, especially before bed.");
                        }

                        if (issue.name.toLowerCase().includes("hyperpigmentation")) {
                          routineSteps.push("Apply Vitamin C serum in the morning to reduce dark spots.");
                          routineSteps.push("Use sunscreen daily to prevent further pigmentation.");
                        }

                        return (
                          <div key={index} className="mt-4">
                            <h4 className="text-md font-semibold text-gray-800">{issue.name} Routine</h4>
                            <ul className="pl-4">
                              {routineSteps.map((step, stepIdx) => (
                                <li key={stepIdx} className="text-sm">{step}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            )}

            {showLooksMaxxingModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-6 w-80 text-center">
                  <h3 className="text-lg font-bold text-blue-500 mb-4">Opt into Experimental 'LooksMaxxing' Mode?</h3>
                  <p className="mb-4 text-sm">Would you like to let our AI compliment you and rate your ability to mew? This feature is completely experimental!</p>
                  <Button onPress={handleLooksMaxxingOptIn} className="mr-4">Yes, I'm ready!</Button>
                  <Button onPress={handleLooksMaxxingOptOut}>No thanks</Button>
                </div>
              </div>
            )}

            {optedIntoLooksMaxxing && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-6 w-80 text-center">
                  <h2 className="text-xl font-semibold">AI Says:</h2>
                  <p className="mt-2">✨ You are looking absolutely stunning today! Your mewing technique is on point, and you're radiating big boss energy!</p>
                  <h3 className="text-3xl font-bold mt-4">LooksMaxxing Score: {looksMaxxingScore}</h3>
                  <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
                  <Button onClick={() => setOptedIntoLooksMaxxing(false)} className="mt-4">Close</Button>
                </div>
              </div>
            )}

          </div>
        </div>
      );            
}
