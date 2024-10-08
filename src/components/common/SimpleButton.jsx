import React from "react";

const SimpleButton = ({
  text = "Learn More",
  href = "#",
  color = "text-dark",
  hoverColor = "hover:text-primary",
  darkTextColor = "dark:text-white",
  darkHoverTextColor = "dark:hover:text-primary",
  extraClass = "",
}) => {
  return (
    <a
      href={href}
      className={`${extraClass} text-base font-medium ${color} ${hoverColor} ${darkTextColor} ${darkHoverTextColor}`}
    >
      {text}
    </a>
  );
};

export default SimpleButton;
