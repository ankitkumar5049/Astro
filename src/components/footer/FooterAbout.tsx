// src/components/Footer/FooterAbout.tsx

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";
import Strings from "../../constants/strings/string";

const FooterAbout: React.FC = () => {
  return (
    <div className="space-y-4 text-center md:text-left">
      <img
        src="/images/logo.png"
        alt="Astrologer Yashika Ji"
        className="mx-auto md:mx-0 w-40"
      />
      <p className="text-gray-600 text-sm">{Strings.footer.about}</p>
      <div className="flex justify-center md:justify-start space-x-4 pt-2">
        <FaFacebookF className="text-[#3b5998]" />
        <FaTwitter className="text-[#1da1f2]" />
        <FaLinkedinIn className="text-[#0077b5]" />
        <FaDribbble className="text-[#ea4c89]" />
        <FaInstagram className="text-[#e4405f]" />
      </div>
    </div>
  );
};

export default FooterAbout;
