import React from "react";
import STATS from "../../constants/stats";
import StatCard from "../uiComponents/StatCard";

const StatsSection: React.FC = () => {
  return (
    <section className="bg-[url('/images/backgroundLogo.png')] bg-repeat py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {STATS.map((stat) => (
          <StatCard
            key={stat.id}
            Icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
