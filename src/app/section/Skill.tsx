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
          The Skills Behind
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block lg:pl-[60px]"
        >
          Every Great{" "}
          <br className="lg:hidden block" />
          <span className="inline">
            <TextType
              text={["Application", "Website"]}
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

      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 lg:mt-16 mt-12">
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="logos:react" width="68" height="68" />
          </div>
          {/* <p className="text-[32px] mb-2.5 leading-tight font-semibold">
            90%
          </p> */}
          <p>React</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="akar-icons:nextjs-fill" width="68" height="68" />
          </div>
          {/* <p className="text-[32px] mb-2.5 leading-tight font-semibold">
            90%
          </p> */}
          <p>Next Js</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="devicon:nodejs" width="68" height="68" />
          </div>
          {/* <p className="text-[32px] mb-2.5 leading-tight font-semibold">
            85%
          </p> */}
          <p>Node Js</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="logos:javascript" width="68" height="68" />
          </div>
          {/* <p className="text-[32px] mb-2.5 leading-tight font-semibold">
            92%
          </p> */}
          <p>Javascript</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="logos:tailwindcss-icon" width="68" height="68" />
          </div>
          {/* <p className="text-[32px] mb-2.5 leading-tight font-semibold">
            93%
          </p> */}
          <p>Tailwind</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="devicon:sass" width="68" height="68" />
          </div>
          {/* <p className="text-[32px] mb-2.5 leading-tight font-semibold">
            92%
          </p> */}
          <p>Sass</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="devicon:laravel" width="68" height="68" />
          </div>
          {/* <p className="text-[32px] mb-2.5 leading-tight font-semibold">
            89%
          </p> */}
          <p>Laravel</p>
        </BoxText>
        <BoxText className="flex flex-col justify-center items-center text-center">
          <div
            className="grid place-content-center w-[100px] h-[100px] rounded-[8px] mb-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon icon="logos:php" width="68" height="68" />
          </div>
          {/* <p className="text-[32px] mb-2.5 leading-tight font-semibold">
            87%
          </p> */}
          <p>PHP</p>
        </BoxText>
      </div>
    </div>
  );
};

export default Skill;
