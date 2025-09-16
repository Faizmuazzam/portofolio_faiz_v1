import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer mt-16 pb-14">
      <div className="grid grid-cols-2 items-center">
        <div className="w-[135px]">
          <Image
            src={"/assets/img/logo_main.png"}
            height={114}
            width={199}
            alt="Logo"
          />
        </div>
        <div className="text-end">
          <span>© 2025 Faiz Muazzam. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
