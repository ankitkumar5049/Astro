import React from "react";

interface ProblemCardProps {
  title: string;
  description: string;
  image: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-blue-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-6 bg-blue-50">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProblemCard;
