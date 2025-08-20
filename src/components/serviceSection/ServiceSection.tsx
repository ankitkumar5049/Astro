// src/components/ServiceSection.tsx

import React from "react";
import Strings from "../../constants/strings/string";
import ServiceCard from "../uiComponents/ServiceCard";

const ServiceSection: React.FC = () => {
  const { TITLE, SUBTITLE, SERVICES } = Strings.SERVICE_SECTION;

  return (
    <section className="py-16 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800">{TITLE}</h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">{SUBTITLE}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
