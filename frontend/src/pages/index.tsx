import { BentoCard, BentoGrid } from "@/components/BentoGrid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 🌟 Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-12 py-6 z-20">
        {/* ✅ Logo */}
        <div className="text-white font-logo text-2xl font-bold">luvera</div>

        {/* ✅ Navigation */}
        <div className="text-white text-xs uppercase tracking-wide flex space-x-3">
          <span>upload images</span>
          <span>•</span>
          <span>ai analysis</span>
          <span>•</span>
          <span>skincare recommendations</span>
        </div>
      </nav>

      {/* 🌟 Hero Section */}
      <section className="relative flex items-center h-[100vh]">
        {/* ✅ Background Image */}
        <Image
          src="/luvera-pic1.jpg"
          alt="Hero Skincare Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* ✅ Hero Text & Button */}
        <div className="relative z-10 text-white max-w-xl pl-12">
          <h1 className="text-5xl font-display leading-tight">
            Take control of <br /> your skincare journey
          </h1>
          <p className="mt-4 text-sm uppercase tracking-wider opacity-90">
            upload images • ai analysis • skincare recommendations
          </p>

          {/* ✅ Get Started Button - Left Aligned */}
          <Link href="/routines">
            <button className="mt-6 border border-white px-6 py-2 rounded-full text-lg tracking-wide hover:bg-white hover:text-brand-dark transition">
              get started →
            </button>
          </Link>
        </div>
      </section>

      {/* 🌟 How It Works Section */}
      <section className="text-center py-16 bg-background text-white">
        <h2 className="text-4xl font-display text-[#8B817A]">HOW IT WORKS</h2>
        <BentoGrid className="mt-8 max-w-5xl mx-auto">
          <BentoCard
            name="Step 1"
            description="Upload an image of your skin"
            href="#"
            cta="Step 1: Upload an image of your skin"
            className="col-span-1 border border-white/20 rounded-lg p-4 hover:bg-white hover:text-brand-dark transition"
            background={
              <Image
                src="/luvera-pic2.png"
                alt="Step 1"
                width={256}
                height={256}
                className="rounded-lg"
              />
            }
          />
          <BentoCard
            name="Step 2"
            description="AI analyzes your skin condition"
            href="#"
            cta="Step 2: AI analyzes your skin"
            className="col-span-1 border border-white/20 rounded-lg p-4 hover:bg-white hover:text-brand-dark transition"
            background={
              <Image
                src="/luvera-pic3.png"
                alt="Step 2"
                width={256}
                height={256}
                className="rounded-lg"
              />
            }
          />
          <BentoCard
            name="Step 3"
            description="Receive personalized skincare recommendations"
            href="/routines"
            cta="Step 3: Get your skincare routine"
            className="col-span-1 border border-white/20 rounded-lg p-4 hover:bg-white hover:text-brand-dark transition"
            background={
              <Image
                src="/luvera-pic4.png"
                alt="Step 3"
                width={256}
                height={256}
                className="rounded-lg"
              />
            }
          />
        </BentoGrid>
      </section>

      {/* 🌟 Bottom Section with Fully Responsive Image */}
      <section className="relative w-full">
        {/* ✅ Bottom Image (Full Width & Adaptive) */}
        <Image
          src="/landing-bottom.png"
          alt="Skincare Products Background"
          layout="responsive"
          width={1440}
          height={800}
          className="w-full h-auto object-cover"
        />

        {/* ✅ CTA Overlay on Image (Centered Responsively) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-display">READY TO GET STARTED?</h2>
          <Link href="/routines">
            <button className="mt-5 bg-white text-brand px-6 py-3 rounded-full text-lg font-medium font-sans transition hover:bg-opacity-90">
              head to step 1 →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
