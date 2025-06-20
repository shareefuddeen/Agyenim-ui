import React, { useRef } from "react";
import rc from "../images/IMG-20250605-WA0020.jpg";
import elder from "../images/IMG-20250604-WA0000.jpg";
import set from "../images/IMG-20250605-WA0010.jpg";
import { motion, useInView } from "framer-motion";
import check from "../icons/checked.png";

const Change = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const inView1 = useInView(ref1, { triggerOnce: true, threshold: 0.1 });
    const inView2 = useInView(ref2, { triggerOnce: true, threshold: 0.1 });
    const inView3 = useInView(ref3, { triggerOnce: true, threshold: 0.1 });

    return (
        <div className="min-h-[120vh] flex flex-col lg:flex-row justify-center items-center">
            <div className="h-full gap-8 w-full flex-col justify-center items-center flex p-8">
                <h1 className="text-4xl text-white font-bold">
                    Together, we change lives
                </h1>
                <div className="flex mx-12 gap-2 ">

                    <img
                        src={check}
                        className="w-6 h-6"
                        loading="lazy"
                        alt="check icon"
                    />

                    <p className="text-white text-xl">
                        We provide training and mentorship that help people
                        believe in their abilities.
                    </p>
                </div>
                <div className="flex mx-12 gap-2 ">
                    <img
                        src={check}
                        className="w-6 h-6"
                        loading="lazy"
                        alt="check icon"
                    />

                    <p className="text-white text-xl">
                        We open doors to education, jobs, and resources that
                        lead to real progress.
                    </p>
                </div>
                <div className="flex mx-12 gap-2 ">
                    <img
                        src={check}
                        className="w-6 h-6"
                        loading="lazy"
                        alt="check icon"
                    />

                    <p className="text-white text-xl">
                        We support initiatives that enable individuals and
                        communities to stand strong on their own.
                    </p>
                </div>
            </div>

            {/* Image Grid Column */}
            <div className="p-8">
                <div className="grid grid-rows-2 gap-4 justify-center">
                    <motion.div
                        ref={ref1}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView1 && { opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-[20em] w-[36em] overflow-hidden inline-block flex justify-center items-center"
                    >
                        <img
                            src={rc}
                            alt="Community members collaborating"
                            className="hover:scale-105 transition duration-300 h-full w-full object-cover rounded-md"
                        />
                    </motion.div>
                    <div className="h-[20em] w-[36em] grid grid-cols-2 gap-4">
                        <motion.div
                            ref={ref2}
                            initial={{ opacity: 0, y: -10 }}
                            animate={inView2 && { opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-[20em] w-full overflow-hidden inline-block"
                        >
                            <img
                                src={elder}
                                alt="Elderly community support"
                                className="hover:scale-105 transition duration-300 h-full w-full object-cover rounded-md"
                            />
                        </motion.div>
                        <motion.div
                            ref={ref3}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView3 && { opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="h-[20em] overflow-hidden inline-block w-full flex justify-center items-center"
                        >
                            <img
                                src={set}
                                alt="Youth leadership session"
                                className="hover:scale-105 transition duration-300 h-full w-full object-cover rounded-md"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Change;
