// src/components/AstroCardSection.tsx

import React from "react";
import Strings from "../../constants/strings/string";
import TeardropCard from "../uiComponents/TeardropCard";


const AstroCardSection: React.FC = () => {
  return (
    <section className="bg-[url('/images/backgroundLogo.png')] bg-repeat py-16 px-4">
      <div className="max-w-7xl mx-auto mt-40 mb-40 grid md:grid-cols-3 gap-10">
        {Strings.ASTRO_CARDS.map((card) => (
          <TeardropCard
            key={card.id}
            title={card.title}
            description={card.description}
            buttonText={card.button}
          />
        ))}
      </div>
    </section>
  );
};

export default AstroCardSection;
