"use client";

import NavMenuResponsive from "@/app/section/components/NavMenuResponsive";
import { scrollToSection } from "@/lib/tools";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <header className="relative z-10 lg:max-w-[1320px] max-w-[768px] mx-auto py-6 xl:px-0 px-5">
        <div className="md:grid md:grid-cols-2 max-md:flex max-md:justify-between items-center">
          <div className="logo md:max-w-[110px] max-w-[86px]">
            <Image
              src={"/assets/img/logo_main.png"}
              height={114}
              width={199}
              alt="Logo"
              className="cursor-target"
            />
          </div>
          <div className="flex justify-end items-center lg:gap-x-5 gap-x-3">
            <div className="cursor-target hidden lg:block">
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
            <div className="hidden lg:block">
              <p className="text-2xl">|</p>
            </div>
            <Link
              href={"https://wa.me/6281912940523"}
              target="_blank"
              className="flex justify-center items-center gap-x-2 lg:px-5 px-4 lg:py-4 py-2 bg-amber-500 text-neutral-900 font-semibold lg:text-xl text-sm rounded-full w-max max-w-full hover:bg-transparent border-amber-500 border-2 hover:text-white hover:border-white transition-all cursor-target"
            >
              Chat via WhatsApp
              <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
            </Link>
            <button
              onClick={() => setIsVisible(!isVisible)}
              type="button"
              className="cursor-pointer cursor-target"
            >
              <Icon
                className="lg:w-auto lg:h-auto w-7 h-7"
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
            <div className="fixed h-screen w-screen inset-0 z-50 overflow-y-auto overflow-x-hidden">
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
                className="side-right-nav min-h-screen max-w-[450px] bg-[#1b1610] relative z-30 ml-auto border-l-2 border-[#342a1a]"
              >
                <div className="relative p-[50px] h-full">
                  <button
                    type="button"
                    className="absolute top-6 right-8 text-red-700 cursor-target cursor-pointer"
                    onClick={() => setIsVisible(!isVisible)}
                  >
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
                  <ul className="mt-8 flex flex-col lg:gap-8 gap-6">
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
                  <div className="md:mt-8 mt-6">
                    <Link
                      href={"#"}
                      className="flex justify-center items-center gap-x-2 px-5 py-4 bg-amber-500 text-neutral-900 font-semibold md:text-xl  rounded-full w-max max-w-full hover:bg-transparent border-amber-500 border-2 hover:text-white hover:border-white transition-all cursor-target"
                    >
                      <span className="uppercase">Get in touch now</span>
                      <Icon
                        icon="line-md:email-twotone"
                        width="24"
                        height="24"
                      />
                    </Link>
                  </div>
                  <div className="md:mt-8 mt-6">
                    <p className="text-2xl max-md:text-xl font-bold mb-5 uppercase">
                      Social Links
                    </p>
                    <div className="flex justify-start items-center gap-3">
                      <Link
                        className="grid place-content-center md:w-[50px] w-[40px] md:h-[50px] h-[40px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                        href={"#"}
                      >
                        <Icon
                          className="max-md:w-[18px]" icon="line-md:instagram" width="24" height="24" />
                      </Link>
                      <Link
                        className="grid place-content-center md:w-[50px] w-[40px] md:h-[50px] h-[40px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                        href={"#"}
                      >
                        <Icon
                          className="max-md:w-[18px]"
                          icon="line-md:github-twotone"
                          width="24"
                          height="24"
                        />
                      </Link>
                      <Link
                        className="grid place-content-center md:w-[50px] w-[40px] md:h-[50px] h-[40px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                        href={"#"}
                      >
                        <Icon
                          className="max-md:w-[18px]" icon="line-md:linkedin" width="24" height="24" />
                      </Link>
                      <Link
                        className="grid place-content-center md:w-[50px] w-[40px] md:h-[50px] h-[40px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                        href={"#"}
                      >
                        <Icon
                          className="max-md:w-[18px]"
                          icon="line-md:email-twotone"
                          width="24"
                          height="24"
                        />
                      </Link>
                      <Link
                        className="grid place-content-center md:w-[50px] w-[40px] md:h-[50px] h-[40px] border border-white rounded-full cursor-target hover:bg-amber-500 hover:border-amber-500 transition-all"
                        href={"#"}
                      >
                        <Icon
                          className="max-md:w-[18px]"
                          icon="line-md:youtube-twotone"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* <div className="md:mt-8 mt-6">
                    <p className="text-2xl max-md:text-xl font-bold mb-5 uppercase">
                      Subscribe To Newsletter
                    </p>
                  </div>
                  <div className="md:mt-6 mt-4">
                    <div className="relative">
                      <input
                        className="p-5 font-medium rounded-full max-md:text-sm placeholder:text-neutral-300 focus:outline-amber-500 focus:outline-3 w-full cursor-target"
                        type={"email"}
                        name={"subscribe"}
                        placeholder={"Email Address*"}
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1 bottom-1 flex justify-center items-center gap-x-2 px-5 py-4 bg-amber-500 text-neutral-900 font-semibold max-md:text-sm text-[15px] uppercase rounded-full w-max max-w-full hover:bg-transparent border-amber-500 border-2 hover:text-white hover:border-white transition-all cursor-target"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <NavMenuResponsive />
    </>
  );
};

export default Header;
