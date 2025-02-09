"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const { scrollY } = useScroll();

  // Smooth scrolling effect with a stretched zoom range
  const smoothScroll = useSpring(scrollY, { stiffness: 60, damping: 25 });

  // Adjusted zoom effect to keep it moving as the user scrolls down
  const scale = useTransform(smoothScroll, [0, 1000], [1.3, 1]);
  const opacity = useTransform(smoothScroll, [0, 1000], [1, 0.85]);

  return (
    <section className="relative flex items-center h-[100vh] overflow-hidden">
      {/* Background Image with Subtle Zoom Effect */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden will-change-transform"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
        style={{ scale, opacity }}
      >
        <Image
          src="/luvera-pic1.jpg"
          alt="Hero Skincare Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
      />

      {/* Hero Text & Button */}
      <motion.div
        className="relative z-10 text-white max-w-xl pl-12"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.7 }}
      >
        <h1 className="text-5xl font-display font-semibold leading-tight">
          Take control of <br /> your skincare journey
        </h1>
        <p className="mt-4 text-md uppercase tracking-wider opacity-90">
          upload image & receive ai analysis + skincare recommendations!
        </p>

        {/* Get Started Button */}
        <Link href="/assessment" passHref>
          <motion.button
            className="mt-6 border border-white px-6 py-2 rounded-full text-lg tracking-wide hover:bg-white hover:text-brand-dark transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            get started →
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
