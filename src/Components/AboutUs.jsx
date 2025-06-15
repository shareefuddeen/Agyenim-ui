import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { section } from "react-scroll";

const AboutUs = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="about"
      className="min-h-screen mt-12 flex flex-col text-white justify-center items-center px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-6xl w-full py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inview && { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl md:text-4xl lg:text-5xl text-yellow-600 font-bold mb-4">
            About us
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed tracking-wide font-serif max-w-3xl mx-auto">
            Founded by Agyenim Boateng, the foundation was established to bring
            positive change to underserved communities. From humble beginnings,
            we have grown to support education, health, and community
            empowerment programs across the district.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8">
          <motion.div
            ref={ref}
            className="flex-1 p-6 bg-[white]/10 rounded-md"
            initial={{ opacity: 0, x: -20 }}
            animate={inview && { opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-2xl md:text-3xl text-yellow-600 font-bold mb-2">
              Mission
            </h1>
            <hr className="border-yellow-600 mb-4" />
            <p className="text-base md:text-lg leading-relaxed tracking-wide font-serif">
              To empower communities through sustainable development programs,
              creating opportunities for education, health, and economic growth.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inview && { opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex-1 p-6 bg-[white]/10 rounded-md"
          >
            <h1 className="text-2xl md:text-3xl text-yellow-600 font-bold mb-2">
              Vision
            </h1>
            <hr className="border-yellow-600 mb-4" />
            <p className="text-base md:text-lg leading-relaxed tracking-wide font-serif">
              A world where every community thrives, and every individual has
              the chance to reach their full potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
