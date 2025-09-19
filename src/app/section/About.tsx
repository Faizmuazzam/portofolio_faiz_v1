"use client";

import TextType from "@/components/TextType";
import React from "react";
import { TitleSection } from "./components/TitleSection";
import { BoxText } from "@/app/section/components/BoxText";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { motion } from "framer-motion";

const About = ({ id }: { id: string }) => {
  return (
    <div className="section-about mt-14" id={id}>
      <TitleSection topSubTitle="About Me">
        <motion.span
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="block"
        >
          Transforming Ideas into <span className="lg:hidden inline">Functional</span>
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block lg:pl-[60px]"
        >
          <span className="hidden lg:inline">Functional</span>{" "}
          <span className="inline">
            <TextType
              text={["Website", "Application"]}
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

      <BoxText className="lg:mt-16 mt-12">
        <h4 className="lg:text-[32px] text-3xl font-semibold mb-5 leading-none">
          Faiz Muazzam
        </h4>
        <p>
          I’m a web developer from Tulungagung, born on November 18, 2000. I
          graduated from Politeknik Negeri Jember in Information Management. My
          passion is building modern web applications, and I have strong skills
          in HTML, CSS, SASS, Tailwind CSS, JavaScript, React, and Next.js{" "}
          <br /> <br className="block lg:hidden" />
          I previously worked as a Front-End Developer at Transcosmos
          Indonesia, where I helped create responsive and user-friendly
          interfaces. I am eager to keep learning, growing, and contributing in
          collaborative environments.
        </p>
      </BoxText>

      <div className="grid lg:grid-cols-2 grid-cols-1 my-6 gap-6">
        <BoxText>
          <div className="flex flex-col xl:flex-row xl:gap-2.5 gap-5">
            <div className="block w-14">
              <Icon icon="solar:palette-bold-duotone" width="56" height="56" />
            </div>
            <div className="block flex-1">
              <h5 className="text-xl font-semibold mb-3.5 leading-tight">
                Front-End Development
              </h5>
              <p>
                I create responsive and modern interfaces with React.js and
                Next.js, using TanStack Query for data handling and animations
                with Framer Motion to deliver engaging user experiences.
              </p>
            </div>
          </div>
        </BoxText>
        <BoxText>
          <div className="flex flex-col xl:flex-row xl:gap-2.5 gap-5">
            <div className="block w-14">
              <Icon icon="solar:database-bold-duotone" width="56" height="56" />
            </div>
            <div className="block flex-1">
              <h5 className="text-xl font-semibold mb-3.5 leading-tight">
                Back-End Development
              </h5>
              <p>
                I develop custom APIs, manage databases with Prisma, and
                implement authentication and server-side logic for secure and
                scalable applications.
              </p>
            </div>
          </div>
        </BoxText>
        <BoxText>
          <div className="flex flex-col xl:flex-row xl:gap-2.5 gap-5">
            <div className="block w-14">
              <Icon icon="icon-park-twotone:puzzle" width="56" height="56" />
            </div>
            <div className="block flex-1">
              <h5 className="text-xl font-semibold mb-3.5 leading-tight">
                Full-Stack Capability
              </h5>
              <p>
                I am also proficient in Laravel, handling both front-end and
                back-end to deliver complete end-to-end solutions.
              </p>
            </div>
          </div>
        </BoxText>
        <BoxText>
          <div className="flex flex-col xl:flex-row xl:gap-2.5 gap-5">
            <div className="block w-14">
              <Icon icon="la:tools" width="56" height="56" />
            </div>
            <div className="block flex-1">
              <h5 className="text-xl font-semibold mb-3.5 leading-tight">
                Tools & Workflow
              </h5>
              <p>
                I use Git & GitHub, CI/CD pipelines, and Docker when needed. I
                am comfortable working in Agile teams and collaborating with
                tools like Jira and Figma.
              </p>
            </div>
          </div>
        </BoxText>
        <div className="block">
          <motion.h5
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[32px] font-semibold mb-8 mt-3 leading-tight"
          >
            Work Experience
          </motion.h5>
          <BoxText>
            <div className="block mb-8">
              <p className="mb-4">2021 - 2022</p>
              <p className="text-2xl font-semibold leading-tight cursor-target w-max max-w-full hover:text-amber-500">
                Front End Developer
              </p>
              <p className="mt-4">Athechno</p>
            </div>
            <div className="block mb-8">
              <p className="mb-4">2022 - 2024</p>
              <p className="text-2xl font-semibold leading-tight cursor-target w-max max-w-full hover:text-amber-500">
                Front End Developer
              </p>
              <p className="mt-4">Transcosmos Indonesia</p>
            </div>
            <div className="block">
              <p className="mb-4">2024 - Present</p>
              <p className="text-2xl font-semibold leading-tight cursor-target w-max max-w-full hover:text-amber-500">
                Full Stack Developer
              </p>
              <p className="mt-4">Transcosmos Indonesia</p>
            </div>
          </BoxText>
        </div>
        <div className="block">
          <motion.h5
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[32px] font-semibold mb-8 mt-3 leading-tight"
          >
            Education
          </motion.h5>
          <BoxText>
            <div className="block mb-8">
              <p className="mb-4">2019 - 2021</p>
              <p className="text-2xl font-semibold leading-tight cursor-target w-max max-w-full hover:text-amber-500">
                Diploma of Education
              </p>
              <p className="mt-4">Politeknik Negeri Jember</p>
            </div>
            <div className="block">
              <p className="mb-4">2024 - Present</p>
              <p className="text-2xl font-semibold leading-tight cursor-target w-max max-w-full hover:text-amber-500">
                Bachelor’s degre
              </p>
              <p className="mt-4">Universitas Terbuka</p>
            </div>
          </BoxText>
          <BoxText className="mt-6">
            <p className="text-center text-2xl font-semibold mb-5">
              Stay With Me
            </p>
            <div className="flex justify-center items-center gap-3">
              <Link
                className="grid place-content-center w-[50px] h-[50px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                href={"#"}
              >
                <Icon icon="line-md:instagram" width="24" height="24" />
              </Link>
              <Link
                className="grid place-content-center w-[50px] h-[50px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                href={"#"}
              >
                <Icon icon="line-md:github-twotone" width="24" height="24" />
              </Link>
              <Link
                className="grid place-content-center w-[50px] h-[50px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                href={"#"}
              >
                <Icon icon="line-md:linkedin" width="24" height="24" />
              </Link>
              <Link
                className="grid place-content-center w-[50px] h-[50px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                href={"#"}
              >
                <Icon icon="line-md:email-twotone" width="24" height="24" />
              </Link>
              <Link
                className="grid place-content-center w-[50px] h-[50px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                href={"#"}
              >
                <Icon icon="line-md:youtube-twotone" width="24" height="24" />
              </Link>
            </div>
          </BoxText>
        </div>
      </div>
    </div>
  );
};

export default About;
