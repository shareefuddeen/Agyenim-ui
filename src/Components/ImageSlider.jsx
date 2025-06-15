import image1 from "../images/hosp.jpg";
import image2 from "../images/IMG-20250605-WA0016.jpg";
import image3 from "../images/dali.jpg";
import image4 from "../images/IMG-20250605-WA0018.jpg";
import image5 from "../images/speech.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// Slide positions
const positions = ["center", "right", "right1", "left", "left1"];
// Animation variants
const variants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    right: { x: "-90%", scale: 0.5, zIndex: 1 },
    right1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "90%", scale: 0.5, zIndex: 1 },
    left1: { x: "50%", scale: 0.7, zIndex: 2 },
};

const ImageSlider = () => {
    const images = [image1, image2, image3, image4, image5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    // Auto-slide with cleanup
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]); // reset interval if index changes

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setPositionIndexes((prev) => prev.map((i) => (i + 1) % images.length));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setPositionIndexes((prev) =>
            prev.map((i) => (i - 1 + images.length) % images.length),
        );
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
        trackMouse: true,
    });

    return (
        <div className="flex flex-col w-full items-center justify-center px-4">
            {/* Mobile Slider */}
            <div
                {...swipeHandlers}
                className="relative w-full h-[400px] sm:hidden flex items-center justify-center overflow-hidden"
            >
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="absolute w-full h-full object-cover rounded-xl shadow-xl"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        loading="lazy"
                    />
                </AnimatePresence>
            </div>

            {/* Desktop Slider */}
            <div
                {...swipeHandlers}
                className="relative w-full h-[500px] hidden sm:flex items-center justify-center overflow-hidden"
            >
                {images.map((image, index) => {
                    const position = positions[positionIndexes[index]];
                    const isCenter = position === "center";

                    return (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={`absolute rounded-xl shadow-xl object-cover transition-transform duration-500 ease-in-out h-full ${
                                isCenter ? "w-[30%]" : "hidden sm:block w-[30%]"
                            }`}
                            initial="center"
                            animate={position}
                            variants={variants}
                            transition={{ duration: 0.5 }}
                            loading="lazy"
                        />
                    );
                })}

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    className="absolute left-6 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow hidden sm:block"
                >
                    ‹
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next Slide"
                    className="absolute right-6 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow hidden sm:block"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
