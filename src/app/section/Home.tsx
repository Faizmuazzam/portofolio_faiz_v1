"use client";

import CircularText from "@/components/CircularText";
import TextType from "@/components/TextType";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { TitleSection } from "./components/TitleSection";
import { BoxText } from "./components/BoxText";
import StarBorder from "@/components/StarBorder";
import { motion } from "motion/react";

const Home = ({ id }: { id: string }) => {
  return (
    <div className="section-home" id={id}>
      <TitleSection
        topSubTitle="Hi, I’m Faiz,"
        textSubType={["Web Developer", "Front-End Developer"]}
      >
        <motion.span
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="block"
        >
          Turning Ideas into
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block lg:pl-[60px]"
        >
          experiences{" "}
          <br className="lg:hidden block" />
          <span className="inline">
            <TextType
              text={["seamless", "creative", "modern", "impactful"]}
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
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-end mt-6"
      >
        <p className="font-medium lg:w-2/3">
          From concept to deployment, I craft applications that are fast,
          responsive, and meaningful for users combining modern design, clean
          code, and seamless functionality to deliver impactful digital
          experiences.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex justify-between lg:pr-10 mt-6 lg:mt-0"
      >
        <div className="relative block lg:w-[133px] lg:h-[133px] w-[100px] h-[100px] p-2 border border-white rounded-full bg-[#2c2918] cursor-target">
          <CircularText
            text="FAIZ MUAZZAM WEB DEVELOPER "
            onHover="speedUp"
            spinDuration={20}
            className="absolute inset-0 font-normal z-10"
          />
          <div className="absolute inset-0 flex justify-center items-center z-0 -rotate-45">
            <Icon
              icon="line-md:arrow-right"
              className="w-5 lg:w-auto"
              width="30"
              height="30"
            />
          </div>
        </div>
        <div className="flex lg:justify-center items-center mt-6 lg:mt-0">
          <StarBorder
            as="button"
            className="relative  w-max max-w-full cursor-target"
            color="#ff6a00ff"
            speed="5s"
            thickness={3}
          >
            <span className="flex justify-center items-center gap-x-2 lg:px-6 px-5 lg:py-4 py-3 font-semibold lg:text-lg text-white">
              Download Resume{" "}
              <Icon
                icon="line-md:cloud-alt-download-filled-loop"
                className="w-5 lg:w-auto"
                width="32"
                height="32"
              />
            </span>
          </StarBorder>
        </div>
      </motion.div>

      <div className="block mt-8">
        <a>
          <BoxText className="flex justify-center items-center gap-5 lg:py-6 py-5 lg:px-16 px:6 text-center">
            <span className="xl:text-6xl lg:text-4xl text-xl font-semibold">
              Lets Work Together
            </span>
            <div
              className="flex justify-center items-center lg:w-20 w-10 lg:h-20 h-10 -rotate-45 rounded-full cursor-target"
              style={{ backgroundColor: "rgba(44, 41, 24, 0.75)" }}
            >
              <Icon
                icon="line-md:arrow-right"
                className="w-5 lg:w-auto"
                width="30"
                height="30"
              />
            </div>
          </BoxText>
        </a>
      </div>
    </div>
  );
};

export default Home;
