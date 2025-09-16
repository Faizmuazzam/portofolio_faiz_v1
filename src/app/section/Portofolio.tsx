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
        <span className="block">From Creative Concepts</span>
        <div className="block pl-[60px]">
          To Live{" "}
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
        </div>
      </TitleSection>

      <div className="grid grid-cols-2 gap-6 mt-16">
        <div className="col-span-2">
          <BoxImage
            width={1920}
            height={1080}
            alt="Portofolio"
            src="/assets/img/portofolio.jpg"
            className="shadow-xl"
          />
        </div>
        <div className="col-span-2">
          <h4 className="text-[32px] font-semibold leading-tight mt-6 max-w-full w-max cursor-target hover:text-amber-500 transition-colors">
            My Portofolio | Faiz Muazzam
          </h4>
        </div>
        <div className="block">
          <BoxImage
            width={1920}
            height={1080}
            alt="Portofolio"
            src="/assets/img/portofolio.jpg"
            className="shadow-lg"
          />
        </div>
        <div className="block">
          <BoxImage
            width={1920}
            height={1080}
            alt="Portofolio"
            src="/assets/img/portofolio.jpg"
            className="shadow-lg"
          />
        </div>
        <div className="col-span-2">
          <h4 className="text-[32px] font-semibold leading-tight mt-6 max-w-full w-max cursor-target hover:text-amber-500 transition-colors">
            My Portofolio | Faiz Muazzam
          </h4>
        </div>
        <div className="block">
          <BoxImage
            width={1920}
            height={1080}
            alt="Portofolio"
            src="/assets/img/portofolio.jpg"
            className="shadow-lg"
          />
        </div>
        <div className="block">
          <BoxImage
            width={1920}
            height={1080}
            alt="Portofolio"
            src="/assets/img/portofolio.jpg"
            className="shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
