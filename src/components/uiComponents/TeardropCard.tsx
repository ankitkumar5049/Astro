// src/components/TeardropCard.tsx

import React from "react";
import { COLORS } from "../../constants/colors/Color";

interface TeardropCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const TeardropCard: React.FC<TeardropCardProps> = ({ title, description, buttonText }) => {
  return (
    <div className="relative bg-white rounded-[60%_60%_50%_50%] shadow-xl p-8 max-w-sm mx-auto flex flex-col items-center justify-between gap-4 min-h-[360px] transition-transform hover:scale-[1.02]">
      <div className="absolute top-4 left-6 bg-white rounded-full shadow-md w-16 h-16 flex items-center justify-center font-semibold text-lg z-10"
      style={{ backgroundColor: COLORS.goldPrimary }}>
        {title}
      </div>
      <p className="text-center text-gray-700 mt-20 px-4 text-sm">{description}</p>
      <button className="btn-gold px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TeardropCard;
