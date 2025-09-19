import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer mt-16 pb-14">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-5">
        <div className="lg:w-[135px] w-[105px]">
          <Image
            src={"/assets/img/logo_main.png"}
            height={114}
            width={199}
            alt="Logo"
          />
        </div>
        <div className="lg:text-end">
          <span>© 2025 Faiz Muazzam. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
