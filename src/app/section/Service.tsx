"use client"

import React from "react";
import { TitleSection } from "./components/TitleSection";
import { BoxText } from "./components/BoxText";
import { motion } from "framer-motion";


const Service = ({ id }: { id: string }) => {
  return (
    <div className="section-about mt-14" id={id}>
      <TitleSection topSubTitle="My Services">
        <motion.span
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="block"
        >
          Turning Your Ideas
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block lg:pl-[60px]"
        >
          Into{" "}
          <span className="text-[#FFAE00] underline font-playfair italic cursor-target">
            Powerful Code
          </span>
        </motion.div>
      </TitleSection>

      <div className="flex flex-col gap-y-8 lg:mt-16 mt-12">
        <BoxText>
          <h5 className="lg:text-[32px] text-2xl leading-tight lg:mb-5 mb-3.5 font-semibold">
            Modern Website Development
          </h5>
          <p>
            I specialize in creating modern websites that combine clean design, smooth animations, and optimized performance. Every project I build is crafted to not only look visually stunning but also deliver a fast and reliable user experience. With the latest tools and frameworks, I make sure your website feels fresh, professional, and ready to stand out in the digital world.
          </p>
        </BoxText>
        <BoxText>
          <h5 className="lg:text-[32px] text-2xl leading-tight lg:mb-5 mb-3.5 font-semibold">
            Custom CMS Solutions
          </h5>
          <p>
            Managing content should be simple. That’s why I design and develop custom Content Management Systems (CMS) tailored to your specific needs. With an intuitive interface and flexible features, you can easily update, organize, and publish content without any technical background. My goal is to give you full control over your website while keeping everything efficient and hassle-free.
          </p>
        </BoxText>
        <BoxText>
          <h5 className="lg:text-[32px] text-2xl leading-tight lg:mb-5 mb-3.5 font-semibold">
            Responsive Website Design
          </h5>
          <p>
            In today’s world, your website must adapt to every screen size. I build fully responsive websites that look great and function seamlessly on desktops, tablets, and smartphones. From layout adjustments to performance optimization, I ensure every visitor enjoys a smooth and consistent experience no matter what device they use.
          </p>
        </BoxText>
        <BoxText>
          <h5 className="lg:text-[32px] text-2xl leading-tight lg:mb-5 mb-3.5 font-semibold">
            API Integration
          </h5>
          <p>
            I can integrate third-party APIs to add powerful features to your website, such as payment gateways, maps, authentication, and more. This makes your website more dynamic and connected to the tools your business needs.
          </p>
        </BoxText>
        <BoxText>
          <h5 className="lg:text-[32px] text-2xl leading-tight lg:mb-5 mb-3.5 font-semibold">
            Website Optimization (Performance & SEO)
          </h5>
          <p>
            I optimize websites for speed, SEO, and best practices to ensure fast load times and better visibility on search engines helping your website reach more users.
          </p>
        </BoxText>
        <BoxText>
          <h5 className="lg:text-[32px] text-2xl leading-tight lg:mb-5 mb-3.5 font-semibold">
            E-Commerce Development
          </h5>
          <p>
            I develop custom online stores with smooth checkout processes, secure payment systems, and responsive designs to help your business grow digitally.
          </p>
        </BoxText>
        <BoxText>
          <h5 className="lg:text-[32px] text-2xl leading-tight lg:mb-5 mb-3.5 font-semibold">
            UI/UX Implementation
          </h5>
          <p>
            I bring designs to life with clean, pixel-perfect code, ensuring that the user experience is intuitive, engaging, and consistent across all pages.
          </p>
        </BoxText>
      </div>
    </div>
  );
};

export default Service;
