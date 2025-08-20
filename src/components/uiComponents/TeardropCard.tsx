// src/components/TeardropCard.tsx

import React from "react";

interface TeardropCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const TeardropCard: React.FC<TeardropCardProps> = ({ title, description, buttonText }) => {
  return (
    <div className="relative bg-white rounded-[60%_60%_50%_50%] shadow-xl p-8 max-w-sm mx-auto flex flex-col items-center justify-between gap-4 min-h-[360px] transition-transform hover:scale-[1.02]">
      <div className="absolute top-4 left-6 bg-white rounded-full shadow-md w-16 h-16 flex items-center justify-center text-red-600 font-semibold text-lg z-10">
        {title}
      </div>
      <p className="text-center text-gray-700 mt-20 px-4 text-sm">{description}</p>
      <button className="bg-red-600 text-white px-6 py-2 rounded-full mt-auto hover:bg-red-700 transition">
        {buttonText}
      </button>
    </div>
  );
};

export default TeardropCard;
