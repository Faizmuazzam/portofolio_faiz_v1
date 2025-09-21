"use client";

import CircularText from "@/components/CircularText";
import ProfileCard from "@/components/ProfileCard";
import StarBorder from "@/components/StarBorder";
import TextType from "@/components/TextType";
import { scrollToSection } from "@/lib/tools";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";
import { BoxText } from "./components/BoxText";
import { TitleSection } from "./components/TitleSection";

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
          className="inline md:block"
        >
          With code, I turn ideas{" "}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="inline md:block lg:pl-[60px]"
        >
          into great{" "}
          <span className="inline max-md:block">
            <TextType
              text={["creations", "webiste", "aplication"]}
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
          I believe a good website is not only visually appealing but also lightweight and fast. That’s why I focus on creating websites that combine visual beauty with high performance.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex lg:justify-between lg:pr-10 mt-6 lg:mt-0 gap-x-5"
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
            className="relative  w-max max-w-full cursor-target cursor-pointer"
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
        <button type="button" className="cursor-pointer w-full" onClick={() => scrollToSection('section-contact')}>
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
        </button>
      </div>

      <div className="relative max-w-full w-max mx-auto md:hidden mt-12 overflow-visible">
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
        >
          <ProfileCard
            name="Faiz Muazzam"
            title="Web Developer"
            handle="faizmuazzam"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/img/me_transparent.png"
            grainUrl="/assets/img/grain.webp"
            iconUrl="/assets/img/iconpattern.png"
            behindGradient={`radial-gradient(
              farthest-side circle at var(--pointer-x) var(--pointer-y),
              hsla(30, 100%, 80%, var(--card-opacity)) 4%,
              hsla(30, 80%, 70%, calc(var(--card-opacity)*0.75)) 10%,
              hsla(30, 60%, 60%, calc(var(--card-opacity)*0.5)) 50%,
              hsla(30, 0%, 50%, 0) 100%
            ),
            radial-gradient(35% 52% at 55% 20%, #ffb347c4 0%, #ff7e0050 100%),
            radial-gradient(100% 100% at 50% 50%, #ff9f00ff 1%, #ff7e0050 76%),
            conic-gradient(
              from 124deg at 50% 50%,
              #ff6a00ff 0%,
              #ffc200ff 40%,
              #ffc200ff 60%,
              #ff6a00ff 100%
            )`}
            innerGradient={`linear-gradient(145deg, #ff9f008c 0%, #ffd58044 100%)`}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
