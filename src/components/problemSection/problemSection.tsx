import React from "react";
import ProblemCard from "../uiComponents/ProblemCard";
import Strings from "../../constants/strings/string";

const ProblemSection: React.FC = () => {
  const problems = [Strings.problemStrings.divorce, Strings.problemStrings.love, Strings.problemStrings.family];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {problems.map((problem, index) => (
          <ProblemCard
            key={index}
            title={problem.title}
            description={problem.description}
            image={problem.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
