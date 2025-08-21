import { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import Strings from "../../constants/strings/string";
import SectionHeading from "../uiComponents/UiComponents";
import { COLORS } from "../../constants/colors/Color";

const AccordionItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full py-3 pl-2 pr-4 text-left font-semibold text-gray-200"
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="pb-4 text-gray-100">{content}</p>}
    </div>
  );
};

export default function AboutSection() {
  return (
    <section className="w-full  bg-black py-12 px-6 md:px-12">
      <SectionHeading title={Strings.about.heading} className="" />
        <p
          className="mt-2 text-lg font-semibold mb-10"
          style={{ color: COLORS.goldPrimary }}
        >
          {Strings.about.subheading}
        </p>
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Left Side Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src="/images/astro1.png"
            alt="Guru Maa Yashika Ji"
            className="w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900">
            {Strings.ABOUT_SECTION.TITLE}
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
             {Strings.ABOUT_SECTION.INTRO}
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div>
          <p className="text-white leading-relaxed mb-6">
            {Strings.ABOUT_SECTION.DESCRIPTION_1}
          </p>

          <p className="text-white leading-relaxed mb-6">
            {Strings.ABOUT_SECTION.DESCRIPTION_2}
          </p>

          {/* Accordion */}
          <div className="border border-white rounded-lg divide-y mb-6">
            <AccordionItem
              title={Strings.ABOUT_SECTION.ACCORDION.HUSBAND_WIFE.TITLE}
              content={Strings.ABOUT_SECTION.ACCORDION.HUSBAND_WIFE.CONTENT}
            />
            <AccordionItem
              title={Strings.ABOUT_SECTION.ACCORDION.LOVE_BACK.TITLE}
              content={Strings.ABOUT_SECTION.ACCORDION.LOVE_BACK.CONTENT}
            />
            <AccordionItem
              title={Strings.ABOUT_SECTION.ACCORDION.RELATIONSHIP.TITLE}
              content={Strings.ABOUT_SECTION.ACCORDION.RELATIONSHIP.CONTENT}
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
              <FaFacebookF className="text-blue-600" />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
              <FaTwitter className="text-sky-500" />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
              <FaYoutube className="text-red-600" />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
              <FaWhatsapp className="text-green-500" />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
              <FaInstagram className="text-pink-500" />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
              <FaPhoneAlt className="text-gray-700" />
            </a>
          </div>

          {/* Call to Action Button */}
          <button className=" btn-gold w-full hover:bg-[#c9143d] text-white font-semibold py-3 rounded-lg transition"
          >
            {Strings.ABOUT_SECTION.CTA_BUTTON}
          </button>
        </div>
      </div>
    </section>
  );
}
