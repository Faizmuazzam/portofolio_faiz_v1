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
          className="inline md:block"
        >
          Spreading happiness {" "}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="inline md:block lg:pl-[60px]"
        >
          through{" "}
          <span className="inline max-md:block">
            <TextType
              text={["creation", "website", "application"]}
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
          I have 3 years of experience as a Front-End Web Developer and 1 year as a Full-Stack Web Developer. I love creating beautiful user interfaces that not only look great but also deliver fast performance. For me, it’s very satisfying when users enjoy interacting with an application.
          <br /><br />
          I build responsive, fast, and visually appealing websites using <span className="text-amber-500">React.js, Next.js, Typescript, Prima, TanStack, REST API, and Laravel.</span> I’m also a strong team player with good communication skills, making collaboration smooth and productive.
        </p>
      </BoxText>

      <div className="grid md:grid-cols-2 grid-cols-1 my-6 gap-6">
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
                Building modern, responsive, and SEO-friendly websites using React.js and Next.js. Designed with TailwindCSS for elegance, and enhanced with smooth animations for interactivity.
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
               Developing secure and efficient backend systems with Laravel and Prisma ORM. Includes REST API development, JWT authentication, and structured database management.
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
                Database Management
              </h5>
              <p>
                Managing MySQL or PostgreSQL databases with Prisma, covering schema design, migrations, seeding, and query optimization for high performance.
              </p>
            </div>
          </div>
        </BoxText>
        <BoxText>
          <div className="flex flex-col xl:flex-row xl:gap-2.5 gap-5">
            <div className="block w-14">
              <Icon icon="uim:rocket" width="56" height="56" />
            </div>
            <div className="block flex-1">
              <h5 className="text-xl font-semibold mb-3.5 leading-tight">
                Deployment & Optimization
              </h5>
              <p>
               Preparing websites to go live with a focus on performance optimization, caching, SEO best practices, and continuous maintenance to ensure long-term stability.
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
              <p className="mb-4 text-amber-400">Apr, 2025 - Present</p>
              <p className="text-2xl font-semibold leading-tight cursor-target w-max max-w-full hover:text-amber-500">
                Full-Stack Developer
              </p>
              <p className="mt-4">Transcosmos Indonesia</p>
            </div>
            <div className="block mb-8">
              <p className="mb-4 text-amber-400">Jan, 2022 - Apr, 2025</p>
              <p className="text-2xl font-semibold leading-tight cursor-target w-max max-w-full hover:text-amber-500">
                Front-End Developer
              </p>
              <p className="mt-4">Transcosmos Indonesia</p>
            </div>
            <div className="block">
              <p className="mb-4 text-amber-400">August, 2021 - Des, 2022</p>
              <p className="text-2xl font-semibold leading-tight cursor-target w-max max-w-full hover:text-amber-500">
                Front-End Developer
              </p>
              <p className="mt-4">Athechno</p>
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
              <p className="mb-4 text-amber-400">2019 - 2021</p>
              <p className="text-2xl font-semibold leading-tight cursor-target w-max max-w-full hover:text-amber-500">
                Diploma of Education
              </p>
              <p className="mt-4">Politeknik Negeri Jember</p>
            </div>
            <div className="block">
              <p className="mb-4 text-amber-400">2024 - Present</p>
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
                href={"https://www.instagram.com/faizmuazzam_/"}
                target="_blank"
              >
                <Icon icon="line-md:instagram" width="24" height="24" />
              </Link>
              <Link
                className="grid place-content-center w-[50px] h-[50px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                href={"https://github.com/Faizmuazzam"}
                target="_blank"

              >
                <Icon icon="line-md:github-twotone" width="24" height="24" />
              </Link>
              <Link
                className="grid place-content-center w-[50px] h-[50px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                href={"https://www.linkedin.com/in/faiz-muazzam-698460245/"}
                target="_blank"
              >
                <Icon icon="line-md:linkedin" width="24" height="24" />
              </Link>
              <Link
                className="grid place-content-center w-[50px] h-[50px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                href={"mailto:faizmuazzam.fm7@gmail.com"}
              >
                <Icon icon="line-md:email-twotone" width="24" height="24" />
              </Link>
              <Link
                className="grid place-content-center w-[50px] h-[50px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                href={"https://youtube.com/@faiz-muazzam?si=hdrip9o6Wx7LynZe"}
                target="_blank"
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
