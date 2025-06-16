import React, { useRef } from "react";
import community from "../images/omanhene.jpg";
import { motion, useInView } from "framer-motion";

const Community = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const imageInView = useInView(imageRef, {
    triggerOnce: true,
    threshold: 0.1,
  });
  const textInView = useInView(textRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white font-mono p-4 lg:gap-20 gap-1 flex flex-col lg:flex-row justify-center items-center">
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={imageInView && { opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img
          src={community}
          className="transform transition mt-16 duration-300 hover:scale-105 h-[28em] w-[30em] rounded-sm"
          alt="Community gathering"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: -20 }}
        animate={textInView && { opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full lg:w-1/2 m-0 p-12"
      >
        <h1 className="text-4xl text-green-900 font-bold mb-4">
          Join Our Growing Community
        </h1>
        <p className="text-2xl text-gray-700">
          Every small act of kindness creates a ripple effect. Let’s come
          together to create meaningful change.
        </p>
        <div className="mt-6 w-[9em] mx-0 ">
          <a
            href="/contact"
            className="hover:bg-green-800 font-bold bg-green-900 text-white rounded-md shadow-md hover:shadow-lg px-4 py-4 "
          >
            Get Involved
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Community;
