import React from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, className }) => {
  return (
    <h2
      className={`text-2xl md:text-3xl font-bold text-white ${className ?? ""}`}
    >
      {title}
    </h2>
  );
};

export default SectionHeading;