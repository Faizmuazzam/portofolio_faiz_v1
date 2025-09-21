"use client";

import TextType from "@/components/TextType";
import React from "react";
import { TitleSection } from "./components/TitleSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { BoxImage } from "./components/BoxImage";

const Portofolio = ({ id }: { id: string }) => {
  return (
    <div className="section-portofolio mt-14" id={id}>
      <TitleSection topSubTitle="My Portofolio">
        <motion.span
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="block"
        >
          With Passion and Skill
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block lg:pl-[60px]"
        >
          Code Turns Into {" "}
          <span className="inline text-[#FFAE00] underline font-playfair italic cursor-target">
            Results
          </span>
        </motion.div>
      </TitleSection>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:mt-16 mt-12">
        <div className="col-span-2">
          <BoxImage
            width={1920}
            height={1080}
            alt="Portofolio"
            src="/assets/img/portofolio.jpg"
            className="lg:shadow-xl shadow-md"
          />
        </div>
        <div className="col-span-2">
          <motion.h4
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:text-[32px] text-2xl font-semibold leading-tight mt-6 max-w-full w-max cursor-target hover:text-amber-500 transition-colors"
          >
            Coming Soon ...
          </motion.h4>
        </div>
       <div className="block">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid place-content-center min-h-[240px] w-full rounded-[8px] shadow-md shadow-amber-600 "
            style={{
              backgroundColor: "rgba(44, 41, 24, 0.5)",
              backdropFilter: "blur(5px)"
            }}
          >
            <span className="text-xl font-medium">
              Coming Soon ...
            </span>
          </motion.div>
        </div>
        <div className="block">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid place-content-center min-h-[240px] w-full rounded-[8px] shadow-md shadow-amber-600 "
            style={{
              backgroundColor: "rgba(44, 41, 24, 0.5)",
              backdropFilter: "blur(5px)"
            }}
          >
            <span className="text-xl font-medium">
              Coming Soon ...
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
