"use client";
import SpotlightCard from "@/components/SpotlightCard";
import { motion } from "framer-motion";
import React, { useState } from "react";

type BoxTextProps = {
  className?: string;
  children: React.ReactNode;
};

export const BoxText = ({ className, children }: BoxTextProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ translateY: hovered ? -5 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <SpotlightCard
        className={`block p-8 border-2 rounded-[8px] cursor-target ${className}`}
        style={{
          backgroundColor: "rgba(44, 41, 24, 0.65)",
          borderColor: hovered ? "#ffae00" : "rgba(255, 255, 255, 0.1)",
          transition: "border-color 0.3s ease",
        }}
        spotlightColor="rgba(193, 155, 96, 0.2)"
      >
        {children}
      </SpotlightCard>
    </motion.div>
  );
};
