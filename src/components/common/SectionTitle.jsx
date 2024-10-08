import React from "react";

const SectionTitle = ({
  tag = "Features",
  titleText = "Main Features",
  text = "Description goes here...",
}) => {
  return (
    <>
      <span className="mb-2 block text-lg font-semibold text-primary">
        {tag}
      </span>
      <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
        {titleText}
      </h2>
      <p className="text-base text-body-color dark:text-dark-6">{text}</p>
    </>
  );
};

export default SectionTitle;
