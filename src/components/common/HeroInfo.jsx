import React from "react";

import Heading from "./Heading";
import Text from "./Text";
import Button from "./Button";

const HeroInfo = () => {
  return (
    <div className="w-full px-4">
      <div className="hero-content  mx-auto max-w-[780px] text-center">
        <Heading
          Tag="h1"
          className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
          text="We'll build house of your dream"
        />
        <Text
          extraClass="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]"
          text="We have 9000 more review and our customers trust on out property and quality products."
        />
        <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
          <li>
            <Button
              text="Book Now"
              link="https://links.tailgrids.com/play-download"
            />
          </li>
          <li>
            <Button
              text="Contact Us"
              link="https://github.com/tailgrids/play-tailwind"
              color="text-white"
              backgroundColor="bg-white/[0.12]"
              hoverBgColor="hover:bg-white"
              hoverColor="hover:text-dark"
              target="_blank"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroInfo;
