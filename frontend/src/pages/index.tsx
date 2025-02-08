import Image from "next/image";
import Link from "next/link";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-light">
      <section className="relative flex items-center justify-center h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/luvera-pic1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-white text-center">
          <h1 className="text-5xl font-serif leading-tight">
            Take control of <br /> your skincare journey
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider">
            upload images • ai analysis • skincare recommendations
          </p>
          <Link href="/routines">
            <button className="mt-5 border border-white px-6 py-2 rounded-full text-lg">
              get started →
            </button>
          </Link>
        </div>
      </section>

      {/* 🌟 How It Works Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-serif text-brand-dark">HOW IT WORKS</h2>
        <BentoGrid className="mt-8 max-w-5xl mx-auto">
          <BentoCard
            name="Step 1"
            description="Upload an image of your skin"
            href="#"
            cta="Start Now"
            className="col-span-1"
            background={<Image src="/luvera-pic2.png" alt="Step 1" width={256} height={256} className="rounded-lg" />}
          />
          <BentoCard
            name="Step 2"
            description="AI analyzes your skin condition"
            href="#"
            cta="Analyze"
            className="col-span-1"
            background={<Image src="/luvera-pic3.png" alt="Step 2" width={256} height={256} className="rounded-lg" />}
          />
          <BentoCard
            name="Step 3"
            description="Receive personalized skincare recommendations"
            href="/routines"
            cta="Get Routine"
            className="col-span-1"
            background={<Image src="/luvera-pic4.png" alt="Step 3" width={256} height={256} className="rounded-lg" />}
          />
        </BentoGrid>
      </section>

      {/* 🌟 CTA Section */}
      <section className="bg-brand p-16 text-center text-white rounded-t-[40px]">
        <h2 className="text-3xl font-serif">READY TO GET STARTED?</h2>
        <Link href="/routines">
          <button className="mt-5 bg-white text-brand px-6 py-3 rounded-full text-lg font-medium">
            head to step 1 →
          </button>
        </Link>
      </section>
    </div>
  );
}
