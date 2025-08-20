// src/components/InsightCard.tsx

import React from "react";
import type { Insight } from "../../types/Insight";

interface InsightCardProps {
  data: Insight;
}

const InsightCard: React.FC<InsightCardProps> = ({ data }) => {
  return (
    <div className="rounded-xl border shadow-md hover:shadow-lg transition duration-300 overflow-hidden max-w-sm">
      <div className="relative h-56 w-full">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
          {data.badge}
        </div>
        <div className="absolute top-2 right-2">
          <img src={data.flag} alt="flag" className="w-8 h-8 rounded-full" />
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-blue-700 font-semibold text-lg hover:underline">
          <a href={data.link}>{data.title}</a>
        </h3>
        <p className="text-gray-600 text-sm">{data.description}</p>
        <a
          href={data.link}
          className="text-blue-700 font-semibold text-sm hover:underline block"
        >
          {data.readMore}
        </a>
      </div>
    </div>
  );
};

export default InsightCard;
