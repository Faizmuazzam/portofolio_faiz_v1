"use client";

import FormControls from "@/app/section/components/FormControls";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <>
      <header className="relative z-10 max-w-[1320px] mx-auto py-6 xl:px-0 px-5 hidden lg:block">
        <div className="grid grid-cols-2 items-center">
          <div className="logo max-w-[110px]">
            <Image
              src={"/assets/img/logo_main.png"}
              height={114}
              width={199}
              alt="Logo"
              className="cursor-target"
            />
          </div>
          <div className="flex justify-end items-center gap-x-5">
            <div className="cursor-target">
              <p className="text-2xl font-semibold">
                <Icon
                  icon="twemoji:flag-indonesia"
                  width="36"
                  height="36"
                  className="inline-block mr-1.5"
                />{" "}
                Indonesia
              </p>
            </div>
            <div className="">
              <p className="text-2xl">|</p>
            </div>
            <Link
              href={"#"}
              className="flex justify-center items-center gap-x-2 px-5 py-4 bg-amber-500 text-neutral-900 font-semibold text-xl rounded-full w-max max-w-full hover:bg-transparent border-amber-500 border-2 hover:text-white hover:border-white transition-all cursor-target"
            >
              HIRE ME
              <Icon icon="line-md:email-twotone" width="24" height="24" />
            </Link>
            <button
              onClick={() => setIsVisible(!isVisible)}
              type="button"
              className="cursor-pointer cursor-target"
            >
              <Icon
                icon="heroicons-outline:menu-alt-2"
                width="40"
                height="40"
              />
            </button>
          </div>
        </div>
      </header>
      <div className="nav-menu">
        <AnimatePresence initial={false}>
          {isVisible && (
            <div className="fixed h-screen w-screen inset-0 z-50">
              <motion.div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: "rgba(0, 0 , 0, 0.5)" }}
                onClick={() => setIsVisible(!isVisible)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="overlay"
              ></motion.div>
              <motion.div
                initial={{ opacity: 1, translateX: "100%" }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 1, translateX: "100%" }}
                transition={{ duration: 0.5 }}
                key="navSideRight"
                className="side-right-nav h-screen w-[450px] bg-[#1b1610] relative z-20 ml-auto border-l-2 border-[#342a1a]"
              >
                <div className="relative p-[50px] h-full">
                  <button type="button" className="absolute top-6 right-8 text-red-700 cursor-target cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
                    <Icon icon="line-md:close-small" width="36" height="36" />
                  </button>
                  <div className="logo max-w-[125px]">
                    <Image
                      src={"/assets/img/logo_main.png"}
                      height={114}
                      width={199}
                      alt="Logo"
                      className="cursor-target"
                    />
                  </div>
                  <ul className="mt-8 flex flex-col gap-8">
                    <li>
                      <button
                        type="button"
                        onClick={() => scrollToSection("section-home")}
                        className="text-lg uppercase font-medium hover:text-amber-500 transition-colors cursor-pointer cursor-target"
                      >
                        HOME
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => scrollToSection("section-about")}
                        className="text-lg uppercase font-medium hover:text-amber-500 transition-colors cursor-pointer cursor-target"
                      >
                        About Us
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => scrollToSection("section-service")}
                        className="text-lg uppercase font-medium hover:text-amber-500 transition-colors cursor-pointer cursor-target"
                      >
                        Services
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => scrollToSection("section-skill")}
                        className="text-lg uppercase font-medium hover:text-amber-500 transition-colors cursor-pointer cursor-target"
                      >
                        My Skill
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => scrollToSection("section-portofolio")}
                        className="text-lg uppercase font-medium hover:text-amber-500 transition-colors cursor-pointer cursor-target"
                      >
                        Portofolio
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => scrollToSection("section-contact")}
                        className="text-lg uppercase font-medium hover:text-amber-500 transition-colors cursor-pointer cursor-target"
                      >
                        Contact Us
                      </button>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link
                      href={"#"}
                      className="flex justify-center items-center gap-x-2 px-5 py-4 bg-amber-500 text-neutral-900 font-semibold text-xl rounded-full w-max max-w-full hover:bg-transparent border-amber-500 border-2 hover:text-white hover:border-white transition-all cursor-target"
                    >
                      <span className="uppercase">Get in touch now</span>
                      <Icon
                        icon="line-md:email-twotone"
                        width="24"
                        height="24"
                      />
                    </Link>
                  </div>
                  <div className="mt-8">
                    <p className="text-2xl font-bold mb-5 uppercase">
                      Social Links
                    </p>
                    <div className="flex justify-start items-center gap-3">
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
                        <Icon
                          icon="line-md:github-twotone"
                          width="24"
                          height="24"
                        />
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
                        <Icon
                          icon="line-md:email-twotone"
                          width="24"
                          height="24"
                        />
                      </Link>
                      <Link
                        className="grid place-content-center w-[50px] h-[50px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                        href={"#"}
                      >
                        <Icon
                          icon="line-md:youtube-twotone"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="text-2xl font-bold mb-5 uppercase">
                      Subscribe To Newsletter
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="relative">
                      <input
                        className="p-5 font-medium rounded-full placeholder:text-neutral-300 focus:outline-amber-500 focus:outline-3 w-full cursor-target"
                        type={"email"}
                        name={"subscribe"}
                        placeholder={"Email Address*"}
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1 bottom-1 flex justify-center items-center gap-x-2 px-5 py-4 bg-amber-500 text-neutral-900 font-semibold text-[15px] uppercase rounded-full w-max max-w-full hover:bg-transparent border-amber-500 border-2 hover:text-white hover:border-white transition-all cursor-target"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
