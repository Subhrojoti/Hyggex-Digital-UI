import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { FaGreaterThan } from "react-icons/fa";
import "../styles/hero.css";
import Card from "./Card";
import publishLogo from "../assets/publishLogo.png";
import { IoMdAddCircle } from "react-icons/io";
import Faq from "./Faq";

const Hero = () => {
  const [activeSection, setActiveSection] = useState(null);

  const section = [
    {
      name: "Flashcard",
      icon: <FaGreaterThan />,
    },
    {
      name: "Mathematics",
      icon: <FaGreaterThan />,
    },
    {
      name: "Relation and Function",
      icon: <FaGreaterThan />,
    },
  ];

  const activities = [
    {
      name: "Study",
      active: true,
    },
    {
      name: "Quiz",
    },
    {
      name: "Test",
    },
    {
      name: "Game",
    },
    {
      name: "Others",
    },
  ];

  const handleClick = (index) => {
    setActiveSection(index);
  };

  const [activeIndex, setActiveIndex] = useState(-1); // Initial state, -1 means no item is active

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index); // Toggle active index
  };

  return (
    <div>
      <div className="mt-[81px] flex items-center">
        <div>
          <GoHome className="w-[30px] h-[30px] text-[#696671]" />
        </div>
        {section.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${
              activeSection === index ? "text-[#06286E]" : "text-[#696671]"
            }`}
            onClick={() => handleClick(index)}
          >
            <div className="icon w-[24px] h-[24px] flex items-center justify-center">
              <FaGreaterThan className="w-[7.41px] h-[12px]" />
            </div>
            <div className="font-inter font-semibold text-xl leading-7 text-center cursor-pointer">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-auto h-auto flex items-center font-montserrat text-center gradient-bg mt-[81px]">
        <h1 className="font-bold text-3xl leading-9">
          Relations and Functions ( Mathematics )
        </h1>
      </div>
      <div className="heading flex items-center justify-center gap-[40px] text-xl font-medium text-[#696671] mt-[55px]">
        {activities.map((item, index) => (
          <ul key={index}>
            <li
              className={`cursor-pointer ${
                index === activeIndex
                  ? "underline text-[#06286E] font-bold"
                  : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.name}
            </li>
          </ul>
        ))}
      </div>
      <div className="card mt-[61px] flex items-center justify-center">
        <Card />
      </div>
      <div className="main mt-[50px]">
        <div className="published flex justify-between">
          <div className="publishLogo flex items-center justify-center w-[217px] h-[80.6px]">
            <img src={publishLogo} />
          </div>
          <div className="gradient-bg  flex items-center text-[#06286E] px-40 gap-[8px]">
            <i>
              <IoMdAddCircle className="w-[50px] h-[50px] text-5xl " />
            </i>
            <p className="text-[28px] font-semibold">Create Flashcard</p>
          </div>
        </div>
      </div>
      <div className="gradient-bg text-6xl font-semibold mt-[225px]">FAQ</div>
      <div className="mt-[43px]">
        <Faq />
      </div>
    </div>
  );
};

export default Hero;
