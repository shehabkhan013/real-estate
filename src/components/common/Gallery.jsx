import React from "react";

import GalleryInfo from "./GalleryInfo";

const Gallery = () => {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
            <img
              src="./images/about/about-image-01.jpg"
              alt="about image"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
            <img
              src="./images/about/about-image-02.jpg"
              alt="about image"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <GalleryInfo />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
