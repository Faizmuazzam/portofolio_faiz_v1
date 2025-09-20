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
          From Creative Concepts <span className="lg:hidden inline">To Live</span>
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block lg:pl-[60px]"
        >
          <span className="hidden lg:inline">To Live</span>{" "}
          <span className="inline">
            <TextType
              text={["Applications", "Experiences"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["inherit"]}
              className="text-[#FFAE00] underline font-playfair italic cursor-target"
            />
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
            My Portofolio | Faiz Muazzam
          </motion.h4>
        </div>
        <div className="block">
          <BoxImage
            width={1920}
            height={1080}
            alt="Portofolio"
            src="/assets/img/portofolio.jpg"
            className="lg:shadow-lg shadow-md"
          />
        </div>
        <div className="block">
          <BoxImage
            width={1920}
            height={1080}
            alt="Portofolio"
            src="/assets/img/portofolio.jpg"
            className="lg:shadow-lg shadow-md"
          />
        </div>
        <div className="col-span-2">
          <motion.h4
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:text-[32px] text-2xl font-semibold leading-tight mt-6 max-w-full w-max cursor-target hover:text-amber-500 transition-colors"
          >
            My Portofolio | Faiz Muazzam
          </motion.h4>
        </div>
        <div className="block">
          <BoxImage
            width={1920}
            height={1080}
            alt="Portofolio"
            src="/assets/img/portofolio.jpg"
            className="lg:shadow-lg shadow-md"
          />
        </div>
        <div className="block">
          <BoxImage
            width={1920}
            height={1080}
            alt="Portofolio"
            src="/assets/img/portofolio.jpg"
            className="lg:shadow-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
