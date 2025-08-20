// src/components/Footer/Footer.tsx

import React from "react";
import FooterAbout from "./FooterAbout";
import FooterServices from "./FooterServices";
import FooterSubscribe from "./FooterSubscribe";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <FooterAbout />
        <FooterServices />
        <FooterSubscribe />
      </div>
    </footer>
  );
};

export default Footer;
