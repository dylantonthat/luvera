import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex items-center h-[100vh]">
      {/* Background Image */}
      <Image
        src="/luvera-pic1.jpg"
        alt="Hero Skincare Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Text & Button */}
      <div className="relative z-10 text-white max-w-xl pl-12">
        <h1 className="text-5xl font-display leading-tight">
          Take control of <br /> your skincare journey
        </h1>
        <p className="mt-4 text-sm uppercase tracking-wider opacity-90">
          upload images • ai analysis • skincare recommendations
        </p>

        {/* Get Started Button - Left Aligned */}
        <Link href="/routines" passHref>
          <button className="mt-6 border border-white px-6 py-2 rounded-full text-lg tracking-wide hover:bg-white hover:text-brand-dark transition">
            get started →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
