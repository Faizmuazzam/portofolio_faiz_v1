"use client";
import { motion } from "framer-motion";
import React from 'react';

type BoxTextProps = {
  className?: string;
  children: React.ReactNode
}

export const BoxText = ({ className, children }: BoxTextProps) => {
  return (
    <>
      <motion.div
        whileHover={{
          translateY: -5,
          borderColor: "#ffae00"
        }}
        className={`block p-8 border-2 rounded-[8px] cursor-target ${className}`}
        style={{
          backgroundColor: "rgba(44, 41, 24, 0.65)",
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
