import React from "react";

import { BottomGradient } from "../svg/BottomGradient";
import { LeftGradient } from "../svg/LeftGradient";
import { RightGradient } from "../svg/RightGradient";
import Heading from "./Heading";

const GalleryInfo = () => {
  return (
    <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
      <div>
        <Heading
          text="09"
          Tag="span"
          className="block text-5xl font-extrabold text-white"
        />
        <Heading
          text="We have"
          Tag="span"
          className="block text-base font-semibold text-white"
        />
        <Heading
          text="Years of experience"
          Tag="span"
          className="block text-base font-medium text-white text-opacity-70"
        />
      </div>
      <div>
        <span className="absolute left-0 top-0 -z-10">
          <LeftGradient />
        </span>
        <span className="absolute right-0 top-0 -z-10">
          <RightGradient />
        </span>
        <span className="absolute bottom-0 right-0 -z-10">
          <BottomGradient />
        </span>
      </div>
    </div>
  );
};

export default GalleryInfo;
