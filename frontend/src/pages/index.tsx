import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <HowItWorks />
      <GetStarted />
    </div>
  );
}
