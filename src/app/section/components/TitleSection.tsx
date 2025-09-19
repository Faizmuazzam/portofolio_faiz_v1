"use client";

import TextType from "@/components/TextType";
import React from "react";
import { motion } from "framer-motion";

type TitleProps = {
  topSubTitle: string;
  textSubType?: string[];
  children?: React.ReactNode;
};

export const TitleSection = ({
  topSubTitle,
  textSubType,
  children,
}: TitleProps) => {
  return (
    <>
      <div className="lg:text-2xl text-lg mb-6">
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="inline">
            <span className="inline-block lg:w-5 lg:h-5 w-3 h-3 bg-amber-500 mr-3 rounded-full"></span>
            {topSubTitle}
          </p>
          {textSubType && (
            <TextType
              text={textSubType}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="inline-block ml-2 cursor-target"
            />
          )}
        </motion.div>
      </div>
      <h2 className="xl:text-7xl lg:text-5xl md:text-5xl text-4xl font-semibold leading-tight">{children}</h2>
    </>
  );
};
