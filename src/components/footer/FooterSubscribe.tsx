// src/components/Footer/FooterSubscribe.tsx

import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import Strings from "../../constants/strings/string";

const FooterSubscribe: React.FC = () => {
  return (
    <div className="space-y-3 text-center md:text-left">
      <h4 className="font-semibold text-lg text-primary">{Strings.footer.subscribe.title}</h4>
      <p className="text-sm text-gray-700">{Strings.footer.subscribe.description}</p>
      <form className="flex items-center border border-blue-900 rounded-full overflow-hidden max-w-xs mx-auto md:mx-0">
        <input
          type="email"
          placeholder={Strings.footer.subscribe.placeholder}
          className="px-4 py-2 w-full text-sm outline-none"
        />
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 flex items-center justify-center"
        >
          <FaRegEnvelope />
        </button>
      </form>
    </div>
  );
};

export default FooterSubscribe;
