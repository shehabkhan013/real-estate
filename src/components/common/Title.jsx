import React from "react";

const Title = ({ extraClass = "", text, subtext, tag: Tag = "h2" }) => {
  return (
    <Tag className={`${extraClass}`}>
      <span>{text}</span>
      {subtext && (
        <span className="block text-3xl font-normal md:text-[40px]">
          {subtext}
        </span>
      )}
    </Tag>
  );
};

export default Title;
