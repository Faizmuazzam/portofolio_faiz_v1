import CircularText from "@/components/CircularText";
import TextType from "@/components/TextType";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { TitleSection } from "./components/TitleSection";
import { BoxText } from "./components/BoxText";

const Home = ({ id }: { id: string }) => {
  return (
    <div className="section-home" id={id}>
      <TitleSection
        topSubTitle="Hi, I’m Faiz,"
        textSubType={["Web Developer", "Front-End Developer"]}
      >
        <span className="block">Turning Ideas into</span>
        <div className="block pl-[60px]">
          experiences {" "}
          <span className="inline">
            <TextType
              text={["seamless", "creative", "modern", "impactful"]}
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
      <div className="flex justify-end mt-6">
        <p className="font-medium w-2/3">
          From concept to deployment, I craft applications that are fast, responsive, and meaningful for users combining modern design, clean code, and seamless functionality to deliver impactful digital experiences.
        </p>
      </div>
      <div className="flex justify-between pr-10">
        <div className="relative block w-[133px] h-[133px] p-2 border border-white rounded-full bg-[#2c2918] cursor-target">
          <CircularText
            text="FAIZ MUAZZAM WEB DEVELOPER "
            onHover="speedUp"
            spinDuration={20}
            className="absolute inset-0 font-normal z-10"
          />
          <div className="absolute inset-0 flex justify-center items-center z-0 -rotate-45">
            <Icon icon="line-md:arrow-right" width="30" height="30" />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {/* Avatar stack */}
          <div className="flex -space-x-3">
            <Image
              src="/assets/img/me.jpg"
              alt="User 1"
              width={2848}
              height={2848}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <Image
              src="/assets/img/me.jpg"
              alt="User 2"
              width={2848}
              height={2848}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <Image
              src="/assets/img/me.jpg"
              alt="User 3"
              width={2848}
              height={2848}
              className="w-10 h-10 rounded-full border-2 border-white"
            />

            {/* Badge */}
            <div className="w-10 h-10 rounded-full bg-[#FFAE00] flex items-center justify-center text-xs font-semibold border-2 border-white">
              2K+
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-medium">2k+ reviews</p>
            <p className="text-xs text-gray-400">(4.90 of 5)</p>
          </div>
        </div>
      </div>

      <div className="block mt-8">
        <a>
          <BoxText className="flex justify-center items-center gap-5 py-10 px-16 text-center">
            <span className="text-6xl font-semibold">Lets Work Together</span>
            <div
              className="flex justify-center items-center w-20 h-20 -rotate-45 rounded-full cursor-target"
              style={{ backgroundColor: "rgba(44, 41, 24, 0.75)" }}
            >
              <Icon icon="line-md:arrow-right" width="30" height="30" />
            </div>
          </BoxText>
        </a>
      </div>
    </div>
  );
};

export default Home;
