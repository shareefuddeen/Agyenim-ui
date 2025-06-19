import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import useSwr from 'swr';
import hand from "../icons/give-love.png";
import { motion, useInView } from "framer-motion";

const api_url = import.meta.env.VITE_API_URL
const fetcher = url => axios.get(url).then(res=> res.data)

const FaQ = () => {

  const {data:faqs} = useSwr(`${api_url}/faqs/`,fetcher,{
    revalidateOnFocus:false,
    revalidateOnReconnect:false,
    dedupingInterval:10000,
  })

  console.log(faqs);
  
  const [openIndex, setOpenIndex] = useState(null);

  
  const ref = useRef(null);
  const inview = useInView(ref, { triggerOnce: true, threshold: 0.1 });


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row p-4 font-serif">
      <div className="flex lg:flex-col items-start justify-center lg:justify-start mt-12">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inview && { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-bold text-4xl lg:text-6xl mb-6">
          FREQUENTLY <br /> ASKED QUESTIONS
        </motion.h1>
        <motion.img
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inview && { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          loading="lazy"
          src={hand}
          alt="Supportive hand"
          className="lg:w-48 w-24 mt-2"
        />
      </div>

      <div className="flex-1 max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-4">
          {!Array.isArray(faqs) ? (
            <p className="text-gray-500">Loading FAQs...</p>
        ) : (
        faqs.map((faq, index) => (

              <div
                key={index}
                className="border-b border-gray-200 transition-shadow hover:shadow-sm rounded"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-4 text-left text-gray-800 font-medium focus:outline-none focus:ring focus:ring-green-300 rounded"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform transform ${openIndex === index ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="p-4 bg-gray-50 text-gray-700 rounded-b"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FaQ;
