import Companies from "@/components/Companies";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Companies />
      <GetStarted />
    </div>
  );
}
