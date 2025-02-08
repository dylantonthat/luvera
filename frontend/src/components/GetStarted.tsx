import Image from "next/image";
import Link from "next/link";

const GetStarted = () => {
  return (
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

      {/* ✅ CTA Overlay on Image (Left-Aligned Text & Button) */}
      <div className="absolute inset-0 flex flex-col justify-center text-white text-left px-12 md:px-24 max-w-2xl">
        <h2 className="text-4xl font-display leading-tight">
          TRANSFORM YOUR SKIN <br /> TODAY
        </h2>
        <Link href="/routines">
          <button className="mt-6 bg-[#FFDCC1] text-brand-dark px-6 py-3 rounded-full text-lg font-medium font-sans transition hover:bg-[#EFC7AD] hover:text-brand-dark shadow-lg">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;
