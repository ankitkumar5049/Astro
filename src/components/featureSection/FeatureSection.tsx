import React from "react";
import { ThumbsUp, ShieldCheck, Lock } from "lucide-react"; // you can replace with your own icons
import SectionHeading from "../uiComponents/UiComponents";
import { COLORS } from "../../constants/colors/Color";
import Strings from "../../constants/strings/string";

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <ThumbsUp className="w-10 h-10 text-white" />,
      title: Strings.features.satisfiedClients,
      button: Strings.features.button,
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
      title: Strings.features.trustedAstrologer,
      button: Strings.features.button,
    },
    {
      icon: <Lock className="w-10 h-10 text-white" />,
      title: Strings.features.privacy,
      button:Strings.features.button,
    },
  ];

  return (
    <section className="w-full bg-gray-50 relative py-16 px-6">
      {/* Background pattern (replace with your own om symbol image if needed) */}
      <div className="absolute inset-0 bg-[url('/images/backgroundLogo.png')] opacity-50 bg-repeat" />

      {/* Content wrapper */}
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <SectionHeading title={Strings.about.title} />
        <p
          className="mt-2 text-lg font-semibold"
          style={{ color: COLORS.goldPrimary }}
        >
          {Strings.tagline}
        </p>


        {/* Features grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg p-20 flex flex-col items-center text-center"
              style={{ backgroundColor: COLORS.darkBg }}
            >
              <div 
              className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
              style={{ backgroundColor: COLORS.goldPrimary }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-6">
                {item.title}
              </h3>
              <button 
              className="btn-gold px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
              // style={{ backgroundColor: COLORS.goldPrimary }}
              >
                {item.button}
              </button>
            </div>
          ))}
        </div>

        <SectionHeading title={Strings.about.heading} className="mt-20" />
        <p
          className="mt-2 text-lg font-semibold"
          style={{ color: COLORS.goldPrimary }}
        >
          {Strings.about.subheading}
        </p>
        
      </div>
    </section>
  );
};

export default FeatureSection;
