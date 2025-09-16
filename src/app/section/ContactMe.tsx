import TextType from "@/components/TextType";
import React from "react";
import { TitleSection } from "./components/TitleSection";
import { BoxText } from "./components/BoxText";

const ContactMe = () => {
  return (
    <div className="section-portofolio mt-14">
      <TitleSection topSubTitle="Contact Me">
        <span className="block">Let’s Build Something</span>
        <div className="block pl-[60px]">
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
        </div>
      </TitleSection>

      <div className="mt-16">
        <BoxText>
          <h5 className="text-[32px] font-semibold leading-tight">Let’s Work Together!</h5>
        </BoxText>
      </div>
    </div>
  );
};

export default ContactMe;
