import React from "react";

import HeroInfo from "./common/HeroInfo";
import { SquireParticle } from "./svg/SquireParticle";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <HeroInfo />

          <div className="w-full px-4">
            <div className=" relative z-10 mx-auto max-w-[845px]">
              <div className="mt-16">
                <img
                  src="./images/hero/hero-image.png"
                  alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                />
              </div>
              <div className="text-white absolute -left-9 bottom-0 z-[-1]">
                <SquireParticle />
              </div>
              <div className="text-white absolute -right-6 -top-6 z-[-1]">
                <SquireParticle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
