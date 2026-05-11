"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroEntranceProps {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "span" | "p" | "h1" | "h2";
}

export default function HeroEntrance({
  children,
  index = 0,
  className,
  as: Tag = "div",
}: HeroEntranceProps) {
  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.14,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
