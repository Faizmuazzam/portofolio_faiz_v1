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
      <Home />
      <About />
      <Service />
      <Skill />
      <Portofolio />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Page;
