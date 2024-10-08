import React from "react";

const Button = ({
  text = "Button",
  color = "text-dark",
  backgroundColor = "bg-white",
  hoverBgColor = "hover:bg-gray-200",
  hoverColor = "hover:text-body-color",
  link = "#",
  target = "_self",
}) => {
  return (
    <a
      href={link}
      target={target}
      className={`inline-flex items-center justify-center rounded-md px-7 py-[14px] text-center text-base font-medium shadow-1 transition duration-300 ease-in-out ${color} ${backgroundColor} ${hoverBgColor} ${hoverColor}`}
    >
      {text}
    </a>
  );
};

export default Button;
