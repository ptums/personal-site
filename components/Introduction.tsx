"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import React, { useEffect, useState } from "react";
import { INTRO } from "../utils/constants";
import PageTitle from "./PageTitle";

const playFairDisplay = Playfair_Display({
  weight: "800",
  display: "swap",
  subsets: ["latin"],
});

const PHRASES = [
  "Lead Web Developer",
  "Senior Front End Engineer",
  "Software Educator",
];

interface TextButtonsProps {
  selectedBtn: string;
  setShowFull: (e: boolean) => void;
  setSelectedBtn: (e: string) => void;
}

const TextButtons = ({
  selectedBtn,
  setShowFull,
  setSelectedBtn,
}: TextButtonsProps) => (
  <div className="my-6 mx-auto flex flex-col sm:flex-row">
    <button
      className={`${
        selectedBtn === "Short Bio"
          ? "text-white bg-emerald-500"
          : "text-emerald-500 rounded border border-emerald-500"
      } p-2 text-base rounded sm:mr-4 w-full sm:w-24`}
      onClick={() => {
        setShowFull(false);
        setSelectedBtn("Short Bio");
      }}
    >
      Short Bio
    </button>
    <button
      className={`${
        selectedBtn === "Long Bio"
          ? "text-white bg-emerald-500"
          : "text-emerald-500 rounded border border-emerald-500"
      } p-2 text-base rounded w-full sm:w-24`}
      onClick={() => {
        setShowFull(true);
        setSelectedBtn("Long Bio");
      }}
    >
      Long Bio
    </button>
  </div>
);
const Introduction = () => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [showFull, setShowFull] = useState<boolean>(false);
  const [selectedBtn, setSelectedBtn] = useState<string>("Short Bio");
  const longIntro = INTRO.slice(1, INTRO.length);

  useEffect(() => {
    const timeout = setInterval(() => {
      setPhraseIndex((prev) => (phraseIndex !== 2 ? prev + 1 : 0));
    }, 3200);

    return () => clearInterval(timeout);
  }, [phraseIndex]);

  useEffect(() => {
    if (showFull) {
      setSelectedBtn("Long Bio");
    }
  }, [showFull]);

  return (
    <>
      <PageTitle title="Peter F. Tumulty" />
      <motion.div
        key={PHRASES[phraseIndex]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <p
          className={`m-0 text-emerald-500 extrabold ${playFairDisplay.className}`}
          style={{ letterSpacing: 8, fontSize: "1.5rem" }}
        >
          {PHRASES[phraseIndex]}
        </p>
      </motion.div>

      <p className="text-lg my-6 mx-0 text-emerald-900 font-normal">
        {INTRO[0]}
      </p>
      {showFull && (
        <>
          {longIntro.map((paragraph: string, index: number) => (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 1.2, delay: index * 1.2 }}
              key={paragraph}
            >
              <p
                className="text-lg my-6 mx-0 text-emerald-900 font-normal"
                key={paragraph}
              >
                {paragraph}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: longIntro.length + 0.3 * 1.2 }}
          >
            <TextButtons
              selectedBtn={selectedBtn}
              setShowFull={setShowFull}
              setSelectedBtn={setSelectedBtn}
            />
          </motion.div>
        </>
      )}
      {!showFull && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <TextButtons
            selectedBtn={selectedBtn}
            setShowFull={setShowFull}
            setSelectedBtn={setSelectedBtn}
          />
        </motion.div>
      )}
    </>
  );
};

export default Introduction;
