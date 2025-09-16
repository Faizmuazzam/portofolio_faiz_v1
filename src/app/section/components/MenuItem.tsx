"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface MenuItemProps {
  label: string;
  icon: string;
  onClick?: () => void; // ✅ callback opsional
}

export const MenuItem = ({ label, icon, onClick }: MenuItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      className="relative cursor-target flex items-center justify-center cursor-pointer w-20 h-20 bg-[#2c2918] rounded-lg border border-[#58370e] text-[#8b6300] hover:bg-[#FFAE00] hover:text-[#382c0d] transition-all"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <Icon icon={icon} width="50" height="50" />

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: "50%" }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute flex items-center justify-center inset-0 bg-[#FFAE00] rounded-lg text-[#0E161F] font-semibold w-[190px] text-2xl"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
