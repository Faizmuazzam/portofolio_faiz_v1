import Home from "./section/Home";
import About from "./section/About";
import Service from "./section/Service";
import Skill from "./section/Skill";
import Portofolio from "./section/Portofolio";
import ContactMe from "./section/ContactMe";
import Footer from "@/includes/Footer";

const Page = () => {
  return (
    <>
      <Home id="section-home" />
      <About id="section-about" />
      <Service id="section-service" />
      <Skill id="section-skill" />
      <Portofolio id="section-portofolio" />
      <ContactMe id="section-contact" />
      <Footer />
    </>
  );
};

export default Page;
