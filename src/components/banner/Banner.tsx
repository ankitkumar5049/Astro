import React from "react";
import { COLORS } from "../../constants/colors/Color";

interface BannerProps {
  message: string;
}

const Banner: React.FC<BannerProps> = ({ message }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-10 flex items-center z-50 overflow-hidden"
      style={{
        backgroundColor: COLORS.darkCard,
        borderBottom: `1px solid ${COLORS.goldLuxury}`,
        color: COLORS.textLight,
      }}
    >
      <div
        className="inline-block whitespace-nowrap font-bold text-base animate-scroll-left"
        style={{ color: COLORS.goldPrimary }}
      >
        {message}
      </div>
    </div>
  );
};

export default Banner;
