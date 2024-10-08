import React from "react";

const Logo = ({ href = "/", src, alt }) => {
  return (
    <a href={href} className="navbar-logo block w-60 max-w-full px-4 h-12">
      <img src={src} alt={alt} className="header-logo h-12" />
    </a>
  );
};

export default Logo;
