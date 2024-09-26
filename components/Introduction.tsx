"use client";
import { playFairDisplay } from "app/font";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { PHRASES } from "utils/constants";
import intro from "db/intro.json";
import PageTitle from "./PageTitle";

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
    className="mr-3 flex flex-row justify-center items-center"
    style={{ height: 16 }}
  >
    <label htmlFor={label}>
      <input
        id={label}
        type="radio"
        checked={selectedBtn}
        className="checked:bg-emerald-500 checked:hover:bg-emerald-500 checked:active:bg-emerald-500 checked:focus:bg-emerald-500 focus:bg-emerald-500 focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
        onChange={() => {
          setShowFull();
          setSelectedBtn();
        }}
      />
      <span className="sr-only">{label}</span>
    </label>
    <span className="text-emerald-800 ml-1 mt-1">{label}</span>
  </span>
);

const TextButtons = ({
  selectedBtn,
  setShowFull,
  setSelectedBtn,
}: TextButtonsProps) => (
  <div className="my-6 mx-auto flex flex-row">
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
  const [showFull, setShowFull] = useState<boolean>(false);
  const [selectedBtn, setSelectedBtn] = useState<string>("Short Bio");
  const introContent = intro?.content;
  const longIntro = introContent.slice(1, introContent.length);

  useEffect(() => {
    if (showFull) {
      setSelectedBtn("Long Bio");
    }
  }, [showFull]);

  return (
    <>
      <PageTitle title="Peter F. Tumulty" />

      <p
        className={`m-0 text-emerald-500 font-bold ${playFairDisplay.className}`}
        style={{ letterSpacing: 8, fontSize: "1.5rem" }}
      >
        {PHRASES[0]}
      </p>
      <TextButtons
        selectedBtn={selectedBtn}
        setShowFull={setShowFull}
        setSelectedBtn={setSelectedBtn}
      />

      <p className="text-base mb-6 mx-0 text-emerald-800 font-normal">
        {introContent[0]}
      </p>
      {showFull && (
        <div style={{ minHeight: 450 }}>
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
        </div>
      )}
    </>
  );
};

export default Introduction;
