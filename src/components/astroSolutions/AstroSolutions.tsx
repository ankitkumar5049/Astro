import React from "react";
import Strings from "../../constants/strings/string";
import Card from "../uiComponents/Card";
import { COLORS } from "../../constants/colors/Color";

const AstroSolutions: React.FC = () => {
  return (
    <section className="w-full py-16"
    style={{ backgroundColor: COLORS.darkBg }}
    >
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
