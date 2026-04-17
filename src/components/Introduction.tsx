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
        <span className="inline-block relative" style={{ perspective: "1000px" }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(8px) brightness(0.5)", y: 10, rotateZ: -5 }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px) brightness(1)", y: 0, rotateZ: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(8px) brightness(0.5)", y: -10, rotateZ: 5 }}
              transition={{ type: "spring", stiffness: 60, damping: 20, mass: 2, duration: 1.8 }}
              style={{ display: "inline-block", transformStyle: "preserve-3d" }}
            >
              {currentWord}
            </motion.span>
          </AnimatePresence>
        </span>
      </p>

      <p className="text-base mb-6 mx-0 text-emerald-800 font-normal">
        Building reliable software means more than just writing code—it's about
        creating clean, maintainable systems that run smoothly and securely.
        Like a detective piecing together clues, I focus on understanding the
        hidden details that keep complex systems safe and dependable. I leverage
        automation and AI tools to speed up development and reduce errors,
        making processes smarter and more efficient. <br />
        <br />
        Behind the scenes, I manage networks and system infrastructure to ensure
        everything stays strong and ready to grow. Staying curious, I
        continuously learn new approaches to software design and monitoring to
        keep up with today's fast-changing tech landscape. Ultimately, I bring a
        big-picture perspective that leads to smarter, more thoughtful solutions
        beyond just coding.
      </p>
    </>
  );
};

export default Introduction;
