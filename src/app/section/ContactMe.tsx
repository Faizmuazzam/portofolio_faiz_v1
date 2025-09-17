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
      <TitleSection topSubTitle="My Portofolio">
        <motion.span
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="block"
        >
          Let’s Build Something
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block pl-[60px]"
        >
          Turn Ideas Into{" "}
          <span className="inline">
            <TextType
              text={["Action", "Code"]}
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

      <div className="mt-16">
        <BoxText>
          <h5 className="text-[32px] font-semibold leading-tight">
            Let’s Work Together!
          </h5>

          <div className="grid grid-cols-2 gap-6 mt-7">
            <FormControls type="text" placeholder="Name" name="name" />
            <FormControls type="email" placeholder="Email" name="email" />
            <FormControls type="text" placeholder="Phone Number" name="phone" />
            <FormControls type="text" placeholder="Subject" name="subject" />
            <div className="col-span-2">
              <TextAreaControls placeholder="Message" name="message" />
            </div>
          </div>

          <Link
            href={"#"}
            className="flex justify-center items-center gap-x-2 mt-6 px-5 py-4 bg-amber-500 text-neutral-900 font-semibold text-xl rounded-full w-max max-w-full hover:bg-transparent border-amber-500 border-2 hover:text-amber-500 transition-all cursor-target"
          >
            SEND{" "}
            <Icon icon="pepicons-print:paper-plane" width="24" height="24" />
          </Link>
        </BoxText>
      </div>
    </div>
  );
};

export default ContactMe;
