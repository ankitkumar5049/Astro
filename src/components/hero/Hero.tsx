import React from "react";
import Strings from "../../constants/strings/string";

const Hero: React.FC = () => {
  return (
    <div className="bg-[#e61c4d] text-white py-14 w-full box-border
  bg-[length:200px,200px] md:bg-[length:300px,300px]">
  
  <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap px-5">
        {/* Left Side */}
        <div className="flex-1 min-w-[300px] relative">
          <p className="text-xs tracking-widest">{Strings.hero.title}</p>
          <h1 className="text-4xl font-bold my-2">
            {Strings.profession} <span className="text-yellow-500">{Strings.name}</span>
          </h1>
          <p className="font-bold text-yellow-500 mb-5">{Strings.hero.subtitle}</p>
          <img src="/assets/om.png" alt="Om Symbol" className="w-32 mt-5" />
        </div>

        {/* Right Side */}
        <div className="flex-1 min-w-[300px] text-center">
          <p className="text-xl mb-5">{Strings.hero.services}</p>

          <div className="flex justify-center gap-5 mb-5">
            <div className="bg-white rounded-xl p-3 w-24 h-24 flex items-center justify-center">
              <img src="/assets/zodiac.png" alt="Zodiac" className="max-w-[80%] max-h-[80%]" />
            </div>
            <div className="bg-white rounded-xl p-3 w-24 h-24 flex items-center justify-center">
              <img src="/assets/tarot.png" alt="Tarot Cards" className="max-w-[80%] max-h-[80%]" />
            </div>
            <div className="bg-white rounded-xl p-3 w-24 h-24 flex items-center justify-center">
              <img src="/assets/numbers.png" alt="Numerology" className="max-w-[80%] max-h-[80%]" />
            </div>
          </div>

          <p className="font-bold text-base">{Strings.hero.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
