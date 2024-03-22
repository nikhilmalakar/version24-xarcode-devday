import { curve } from "../assets";
import Section from "./Section";
import {  BottomLine } from "./design/Hero";
import { useRef } from "react";
import Slider from "./slider/Slider";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section  
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[3.5rem]">
          <h1 className="h2 font-bold mb-6">
            Version '24 - {` `}
            <span className="inline-block relative">
              DevDay{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
        </div>

        < Slider/>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
