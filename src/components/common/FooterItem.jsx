import React from "react";

const FooterItem = ({ children, extraClass = "" }) => {
  return <div className={`w-full px-4 ${extraClass}`}>{children}</div>;
};

export default FooterItem;
