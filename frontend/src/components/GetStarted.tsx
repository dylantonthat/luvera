import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const GetStarted = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <motion.div
        initial={false}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-full h-auto"
      >
        <Image
          src="/landing-bottom.png"
          alt="Skincare Products Background"
          layout="responsive"
          width={1440}
          height={800}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <motion.div
        initial={false}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col justify-center text-white text-left px-12 md:px-24 max-w-2xl -mt-8"
      >
        <motion.h2
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-display leading-snug md:leading-tight max-w-xl"
        >
          TRANSFORM YOUR <br /> SKIN TODAY
        </motion.h2>

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <Link href="/assessment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mt-6 bg-[#FFDCC1] text-brand-dark px-6 py-3 rounded-full text-lg font-medium transition hover:bg-[#EFC7AD] hover:text-brand-dark shadow-lg"
            >
              get started →
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
