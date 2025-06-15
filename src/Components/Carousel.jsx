import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Mslm from "../images/Mslim comm.jpg";
import kmp from "../images/kamampa s.jpg";

const images = [
  { src: Mslm, alt: "Muslim community gathering" },
  { src: kmp, alt: "Kamampa School students" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, isPaused]);

  return (
    <div
      id="carousel"
      className="relative w-full h-[100vh]  flex justify-center items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover absolute top-0 left-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          onError={(e) => {
            e.target.src = "fallback.jpg";
          }}
        />
      </AnimatePresence>
      <div className="z-40 text-center text-white p-[6em]">
        <p className="lg:text-5xl text-2xl tracking-wide leading-[1.2em]">
          Every project we undertake is guided by compassion—understanding the
          unique challenges people face and responding with empathy and care.
        </p>
      </div>
    </div>
  );
};

export default Carousel;
