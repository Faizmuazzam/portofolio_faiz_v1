"use client"

import TextType from "@/components/TextType";
import { BoxText } from "./components/BoxText";
import FormControls, { TextAreaControls } from "./components/FormControls";
import { TitleSection } from "./components/TitleSection";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";

const ContactMe = ({ id }: { id: string }) => {
  return (
    <div className="section-portofolio mt-14" id={id}>
      <TitleSection topSubTitle="My Contact">
        <motion.span
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="block"
        >
          Let’s Work Together
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block lg:pl-[60px]"
        >
          On Your Next {" "}
          <span className="text-[#FFAE00] underline font-playfair italic cursor-target">
            Project
          </span>
        </motion.div>
      </TitleSection>

      <div className="mt-16">
        <BoxText>
          <h5 className="lg:text-[32px] text-2xl font-semibold leading-tight">
            Get In Touch
          </h5>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-7">
            <FormControls type="text" placeholder="Name" name="name" />
            <FormControls type="email" placeholder="Email" name="email" />
            <FormControls type="text" placeholder="Phone Number" name="phone" />
            <FormControls type="text" placeholder="Subject" name="subject" />
            <div className="lg:col-span-2">
              <TextAreaControls placeholder="Message" name="message" />
            </div>
          </div>

          <Link
            href={"#"}
            className="flex justify-center items-center lg:gap-x-2 gap-x-1 mt-6 lg:px-5 px-5 lg:py-4 py-2.5 bg-amber-500 text-neutral-900 font-semibold lg:text-xl text-lg rounded-full w-max max-w-full hover:bg-transparent border-amber-500 border-2 hover:text-amber-500 transition-all cursor-target"
          >
            SEND{" "}
            <Icon icon="pepicons-print:paper-plane" className="lg:w-auto w-5" width="24" height="24" />
          </Link>
        </BoxText>
      </div>
    </div>
  );
};

export default ContactMe;
