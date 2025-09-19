"use client";

import React from "react";
import { TitleSection } from "./components/TitleSection";
import TextType from "@/components/TextType";
import { BoxText } from "./components/BoxText";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";

const Skill = ({ id }: { id: string }) => {
  return (
    <div className="section-skill mt-14" id={id}>
      <TitleSection topSubTitle="My Skill">
        <motion.span
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="block"
        >
          From Frontend Flair
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block lg:pl-[60px]"
        >
          To Backend{" "}
          <br className="lg:hidden block" />
          <span className="inline">
            <TextType
              text={["Brilliance", "Innovation", "Power"]}
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

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 lg:mt-16 mt-12">
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="logos:react" width="68" height="68" />
          </div>
          <h3 className="text-[32px] mb-2.5 leading-tight font-semibold">
            90%
          </h3>
          <p>React</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="akar-icons:nextjs-fill" width="68" height="68" />
          </div>
          <h3 className="text-[32px] mb-2.5 leading-tight font-semibold">
            90%
          </h3>
          <p>Next Js</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="devicon:nodejs" width="68" height="68" />
          </div>
          <h3 className="text-[32px] mb-2.5 leading-tight font-semibold">
            85%
          </h3>
          <p>Node Js</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="logos:javascript" width="68" height="68" />
          </div>
          <h3 className="text-[32px] mb-2.5 leading-tight font-semibold">
            92%
          </h3>
          <p>Javascript</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="lineicons:expressjs" width="68" height="68" />
          </div>
          <h3 className="text-[32px] mb-2.5 leading-tight font-semibold">
            86%
          </h3>
          <p>Express Js</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="logos:tailwindcss-icon" width="68" height="68" />
          </div>
          <h3 className="text-[32px] mb-2.5 leading-tight font-semibold">
            93%
          </h3>
          <p>Tailwind</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="devicon:sass" width="68" height="68" />
          </div>
          <h3 className="text-[32px] mb-2.5 leading-tight font-semibold">
            92%
          </h3>
          <p>Sass</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="devicon:laravel" width="68" height="68" />
          </div>
          <h3 className="text-[32px] mb-2.5 leading-tight font-semibold">
            89%
          </h3>
          <p>Laravel</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="logos:php" width="68" height="68" />
          </div>
          <h3 className="text-[32px] mb-2.5 leading-tight font-semibold">
            87%
          </h3>
          <p>PHP</p>
        </BoxText>
      </div>
    </div>
  );
};

export default Skill;
