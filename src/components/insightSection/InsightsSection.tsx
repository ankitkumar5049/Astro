// src/components/InsightsSection.tsx

import React from "react";
import Strings from "../../constants/strings/string";
import InsightCard from "../uiComponents/InsightCard";

const InsightsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[url('/images/backgroundLogo.png')] bg-repeat text-center">
      <h2 className="text-3xl text-white font-bold mb-10">{Strings.insights.title}</h2>
      <div className="grid md:grid-cols-3 gap-6 justify-center">
        {Strings.insights.cards.map((card, index) => (
          <InsightCard key={index} data={card} />
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
