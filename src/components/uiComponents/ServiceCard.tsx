// src/components/ServiceCard.tsx

import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <img
        src={image}
        alt={title}
        className="w-65 h-65 rounded-full object-cover shadow-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
