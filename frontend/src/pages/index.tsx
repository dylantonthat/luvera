import RoutineGenerator from "../components/RoutineGenerator";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Skincare Routine Generator</h1>
      <RoutineGenerator />
    </div>
  );
}
