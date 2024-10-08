import React from "react";

const Heading = ({ Tag = "h4", text, className }) => {
  return <Tag className={`${className}`}>{text}</Tag>;
};

export default Heading;
