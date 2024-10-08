import React from "react";

import MenuItem from "./MenuItem";

const Menu = ({ menuItems }) => {
  return (
    <ul className="hidden lg:flex">
      {menuItems.map((item, index) => (
        <li key={index} className="group relative">
          <MenuItem href={item.href} name={item.name} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
