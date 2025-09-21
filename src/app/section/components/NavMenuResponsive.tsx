"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import Dock from "@/components/Dock";

export default function NavMenuResponsive() {
  const [visible, setVisible] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const items = [
    {
      icon: <Icon icon="lets-icons:home-duotone" width="24" height="24" />,
      label: "Home",
      className: "bg-[#2c2918] cursor-target max-md:hidden",
      onClick: () => scrollToSection("section-home"),
    },
    {
      icon: <Icon icon="duo-icons:id-card" width="24" height="24" />,
      label: "About",
      className: "bg-[#2c2918] cursor-target",
      onClick: () => scrollToSection("section-about"),
    },
    {
      icon: <Icon icon="duo-icons:briefcase" width="24" height="24" />,
      label: "Service",
      className: "bg-[#2c2918] cursor-target",
      onClick: () => scrollToSection("section-service"),
    },
    {
      icon: <Icon icon="uim:rocket" width="24" height="24" />,
      label: "Skill",
      className: "bg-[#2c2918] cursor-target",
      onClick: () => scrollToSection("section-skill"),
    },
    {
      icon: <Icon icon="pepicons-print:folder" width="24" height="24" />,
      label: "Portofolio",
      className: "bg-[#2c2918] cursor-target",
      onClick: () => scrollToSection("section-portofolio"),
    },
    {
      icon: <Icon icon="duo-icons:message" width="24" height="24" />,
      label: "Contact Us",
      className: "bg-[#2c2918] cursor-target max-md:hidden",
      onClick: () => scrollToSection("section-contact"),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop > 50 && scrollTop < maxScroll - 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }} // muncul dari bawah
          animate={{ opacity: 1, y: 0 }} // posisi normal
          exit={{ opacity: 0, y: 50 }} // hilang ke bawah
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="nav-menu-responsive fixed bottom-4 left-0 right-0 z-20 xl:hidden block"
        >
          <div className="relative">
            <Dock
              items={items}
              panelHeight={50}
              baseItemSize={50}
              magnification={70}
              className="bg-[#2c2918]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
