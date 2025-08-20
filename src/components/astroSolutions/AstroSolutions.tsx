import React from "react";
import Strings from "../../constants/strings/string";
import Card from "../uiComponents/Card";

const AstroSolutions: React.FC = () => {
  return (
    <section className="w-full bg-[#e61c4d] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
          {Strings.ASTRO_SOLUTIONS.TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Strings.ASTRO_SOLUTIONS.CARDS.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              button={card.button}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AstroSolutions;
