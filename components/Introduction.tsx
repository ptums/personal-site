"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import React, { useEffect, useState } from "react";
import { INTRO } from "utils/constants";
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

const BioRadioBtn = ({
  selectedBtn,
  label,
  setShowFull,
  setSelectedBtn,
}: {
  selectedBtn: boolean;
  label: string;
  setShowFull: () => void;
  setSelectedBtn: () => void;
}) => (
  <span
    className="sm:mr-3 flex flex-row justify-center items-center"
    style={{ height: 16 }}
  >
    <input
      type="radio"
      checked={selectedBtn}
      className="checked:bg-emerald-500 checked:hover:bg-emerald-500 checked:active:bg-emerald-500 checked:focus:bg-emerald-500 focus:bg-emerald-500 focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
      onChange={() => {
        setShowFull();
        setSelectedBtn();
      }}
    />
    <span className="text-emerald-800 ml-1">{label}</span>
  </span>
);

const TextButtons = ({
  selectedBtn,
  setShowFull,
  setSelectedBtn,
}: TextButtonsProps) => (
  <div className="my-6 mx-auto flex flex-col sm:flex-row">
    <BioRadioBtn
      selectedBtn={selectedBtn === "Short Bio"}
      label="Short Bio"
      setShowFull={() => setShowFull(false)}
      setSelectedBtn={() => setSelectedBtn("Short Bio")}
    />
    <BioRadioBtn
      selectedBtn={selectedBtn === "Long Bio"}
      label="Long Bio"
      setShowFull={() => setShowFull(true)}
      setSelectedBtn={() => setSelectedBtn("Long Bio")}
    />
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
      <TextButtons
        selectedBtn={selectedBtn}
        setShowFull={setShowFull}
        setSelectedBtn={setSelectedBtn}
      />

      <p className="text-base mb-6 mx-0 text-emerald-800 font-normal">
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
                className="text-base my-6 mx-0 text-emerald-800 font-normal"
                key={paragraph}
              >
                {paragraph}
              </p>
            </motion.div>
          ))}
        </>
      )}
    </>
  );
};

export default Introduction;
