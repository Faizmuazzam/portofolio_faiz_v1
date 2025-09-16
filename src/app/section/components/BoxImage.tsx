import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

type BoxImageProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
  className: string;
};

export const BoxImage = ({
  width,
  height,
  src,
  alt,
  className,
}: BoxImageProps) => {
  return (
    <div
      className={`block rounded-[8px] overflow-hidden shadow-amber-600 cursor-target ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, type: "tween" }}
      >
        <Image
          width={width}
          height={height}
          src={src}
          alt={alt}
          className="block"
        />
      </motion.div>
    </div>
  );
};
