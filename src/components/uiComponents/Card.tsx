import React from "react";

interface CardProps {
  title: string;
  description: string;
  button: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, button, image }) => {
  return (
    <div className="bg-[#fff8f2] rounded-2xl shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <button className="btn-gold mt-6 px-4 py-2 hover:bg-[#c9143d] text-white font-semibold rounded-md transition"
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default Card;
