import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Engineer", "Tinkerer", "Detective"];

const Introduction = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1
        style={{ letterSpacing: 8 }}
        className="text-4xl text-emerald-800 tracking-wider mb-1 font-bold"
      >
        Peter F. Tumulty
      </h1>

      <p
        className="m-0 text-emerald-500 font-bold mb-8 playfair-display"
        style={{ letterSpacing: 4, fontSize: "1.25rem" }}
      >
        Software{" "}
        <span
          className="inline-block relative"
          style={{ perspective: "1000px" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{
                opacity: 0,
                scale: 0.9,
                filter: "blur(8px) brightness(0.5)",
                y: 10,
                rotateZ: -5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px) brightness(1)",
                y: 0,
                rotateZ: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                filter: "blur(8px) brightness(0.5)",
                y: -10,
                rotateZ: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                mass: 2,
                duration: 1.8,
              }}
              style={{ display: "inline-block", transformStyle: "preserve-3d" }}
            >
              {currentWord}
            </motion.span>
          </AnimatePresence>
        </span>
      </p>

      <p className="text-base mb-6 mx-0 text-emerald-800 font-normal">
        Reliable software is about more than writing code. At enterprise scale,
        it means owning the full product. From the first design decisions to the
        details that make or break a system in production, I use automation and
        AI to move faster and cut down on mistakes, so the work is smarter, not
        just quicker. <br />
        <br />I care about building things the right way. Not just making it
        work, but making sure it scales, it's accessible, it's observable, and
        the next engineer who touches it can actually understand it. That
        standard doesn't change based on the deadline
      </p>
    </>
  );
};

export default Introduction;
