import React from "react";

const SocialIcon = ({ href, icon, className }) => {
  return (
    <a href={href} className={`${className}`}>
      {icon}
    </a>
  );
};

export default SocialIcon;
