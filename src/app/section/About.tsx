import TextType from "@/components/TextType";
import React from "react";

const About = () => {
  return (
    <div className="section-about mt-14">
      <div className="text-2xl mb-6">
        <span>
          <span className="inline-block w-5 h-5 bg-amber-500 mr-3 rounded-full"></span>
          About
        </span>
      </div>

      <h3 className="text-7xl font-semibold leading-tight">
        <span className="block">Crafting Seamless</span>
        <div className="block pl-[60px]">
          User{" "}
          <span className="inline">
            <TextType
              text={["Experiences", "Experiences"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["inherit"]}
              className="text-[#FFAE00] underline font-playfair italic cursor-target"
            />
          </span>
        </div>
      </h3>
    </div>
  );
};

export default About;
