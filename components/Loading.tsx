"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Loading = () => (
  <div className="w-full h-screen">
    <div
      className="flex flex-col items-center justify-center "
      style={{ minHeight: 600 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <Image
          src="/images/badge.svg"
          alt="Tumulty Web Services"
          width={62}
          height={62}
        />
      </motion.div>
    </div>
  </div>
);

export default Loading;
