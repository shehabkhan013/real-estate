import React from "react";

const Text = ({ extraClass = "", text }) => {
  return <p className={`${extraClass}`}>{text}</p>;
};

export default Text;
