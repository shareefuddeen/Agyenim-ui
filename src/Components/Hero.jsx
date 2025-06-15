import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  const ref = useRef(null);
  const inview = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="hero"
      className="hero-bg mt-8 gap-1 lg:gap-2 min-h-screen flex flex-col justify-center items-center text-white"
    >
      <div className="text-center px-4">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inview && { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-6xl font-semibold tracking-wide"
        >
          Building <span className="font-bold text-red-900">Hope</span>, One
          Project at a <span className="font-bold text-green-900">Time</span>
        </motion.h1>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inview && { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4"
        >
          <p className="text-2xl md:text-4xl">
            Transforming communities through acts of kindness.
          </p>
          <p className="text-2xl md:text-2xl mt-2">
            Empowering lives and creating a brighter future for all.
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={inview && { opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="bg-orange-800 rounded-md mt-6 px-4 py-2 text-lg md:text-xl hover:bg-red-800 transition duration-500"
      >
        <Link to="/contact">Join Our Mission &rarr;</Link>
      </motion.div>
    </section>
  );
}

export default Hero;
