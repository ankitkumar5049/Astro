// src/components/Footer/FooterServices.tsx

import React from "react";
import Strings from "../../constants/strings/string";

const FooterServices: React.FC = () => {
  return (
    <div className="space-y-2 text-center md:text-left">
      <h4 className="font-semibold text-lg text-primary">{Strings.footer.services.title}</h4>
      <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
        {Strings.footer.services.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default FooterServices;
