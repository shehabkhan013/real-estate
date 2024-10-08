import React from "react";

import Logo from "../common/Logo";
import Menu from "../common/Menu";
import SignInSignUp from "../common/SignInSignUp";

const Header = () => {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "blog-grids.html" },
  ];

  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <Logo src="./images/logo/logo.svg" alt="Company Logo" href="/" />

            <Menu menuItems={menuItems} />

            <SignInSignUp signInHref="signin" signUpHref="signup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
