"use client";

import { motion } from "framer-motion";

const PageAnimationLayout = ({
  children,
  duration,
  delay,
}: {
  children: React.ReactNode;
  duration: number;
  delay: number;
}) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.span>
);

export default PageAnimationLayout;
