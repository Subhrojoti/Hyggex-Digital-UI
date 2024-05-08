import React, { useState } from "react";
import "../styles/card.css";
import { MdOutlineLightbulb } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";
import ReactCardFlip from "react-card-flip";
import { LuRotateCw } from "react-icons/lu";
import { IoChevronForwardCircle } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";
import { MdOutlineFullscreen } from "react-icons/md";

const Card = () => {
  const [isFlipped, serIsFlipped] = useState(false);
  const [slide, setSlide] = useState(1);

  function flipCard() {
    serIsFlipped(!isFlipped);
  }

  let nextSlide = () => {
    if (slide < 10) setSlide(slide + 1);
  };
  let previousSlide = () => {
    if (slide > 1) {
      setSlide(slide - 1);
    }
  };

  return (
    <div>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div
          className="card-bg front h-[393.19px] w-[712px]"
          onClick={flipCard}
        >
          <div className="relative flex justify-between items-start">
            <div className="flex items-center">
              <MdOutlineLightbulb
                className="text-4xl text-white absolute top-[34.01px] right-[643.99px]"
                style={{ width: "34.01px", height: "34.01px" }}
              />
            </div>
            <div className="flex items-center">
              <MdVolumeUp
                className="text-4xl absolute top-[34.01px] left-[643.99px] text-white"
                style={{ width: "34.01px", height: "34.01px" }}
              />
            </div>
          </div>
          <div className=" equation flex items-center justify-center h-full text-white font-semibold text-4xl">
            <p>9 + 6 + 7x - 2x - 3</p>
          </div>
        </div>
        <div className="card-bg-back h-[393.19px] w-[712px]" onClick={flipCard}>
          <div className="relative flex justify-between items-start">
            <div className="flex items-center">
              <MdOutlineLightbulb
                className="text-4xl text-white absolute top-[34.01px] right-[643.99px]"
                style={{ width: "34.01px", height: "34.01px" }}
              />
            </div>
            <div className="flex items-center">
              <MdVolumeUp
                className="text-4xl absolute top-[34.01px] left-[643.99px] text-white"
                style={{ width: "34.01px", height: "34.01px" }}
              />
            </div>
          </div>
          <div className=" equation flex items-center justify-center h-full text-white font-semibold text-4xl">
            <p>5x + 12</p>
          </div>
        </div>
      </ReactCardFlip>
      <div className="flex items-center justify-between px-14 mt-7">
        <div className="redo text-4xl text-[#06286E]">
          <LuRotateCw />
        </div>
        <div className="slide flex items-center gap-4">
          <div
            className="forward text-7xl text-[#06286E]"
            onClick={previousSlide}
          >
            <IoChevronBackCircle />
          </div>
          <p className="font-bold text-2xl text-[#202B37]">
            {slide < 10 ? "0" : ""}
            {slide}/10
          </p>
          <div className="text-7xl text-[#06286E]" onClick={nextSlide}>
            <IoChevronForwardCircle />
          </div>
        </div>
        <div className="fullScreen text-5xl text-[#06286E]">
          <MdOutlineFullscreen />
        </div>
      </div>
    </div>
  );
};

export default Card;
