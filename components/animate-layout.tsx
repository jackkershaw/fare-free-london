"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";

export default function AnimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            y: 20,
            opacity: 0,
            scale: 0.99,
          },
          pageAnimate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              when: "beforeChildren",
            },
          },
        }}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
}
