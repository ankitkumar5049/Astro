import React from "react";

interface StatCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ Icon, value, label }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-8 transition hover:shadow-lg">
      <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#e61c4d] mb-4">
        <Icon className="text-[#e61c4d] text-3xl" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">
        {value} <span className="font-normal">{label}</span>
      </h3>
    </div>
  );
};

export default StatCard;
