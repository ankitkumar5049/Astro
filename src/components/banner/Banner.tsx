import React from "react";

interface BannerProps {
  message: string;
}

const Banner: React.FC<BannerProps> = ({ message }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-10 flex items-center bg-yellow-200 border-b border-gray-300 z-50 overflow-hidden">
      <div className="inline-block whitespace-nowrap font-bold text-black text-base animate-scroll-left">
        {message}
      </div>
    </div>
  );
};

export default Banner;
