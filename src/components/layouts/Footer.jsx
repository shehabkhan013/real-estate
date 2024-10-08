import React from "react";

import FooterItem from "../common/FooterItem";
import Heading from "../common/Heading";
import SimpleButton from "../common/SimpleButton";
import Blog from "../common/Blog";
import FooterInfo from "../common/FooterInfo";

const menuItems = [
  { text: "Home", href: "home.html" },
  { text: "Features", href: "features.html" },
  { text: "About", href: "about.html" },
];

const featuresItems = [
  { text: "How it works" },
  { text: "Privacy policy" },
  { text: "Terms of Service" },
  { text: "Refund policy" },
];

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <FooterItem extraClass="sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <FooterInfo
                logoSrc="./images/logo/logo.svg"
                logoAlt="Company Logo"
                description="We create digital experiences for brands and companies by using technology."
              />
            </FooterItem>

            <FooterItem extraClass="sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="w-full">
                <Heading
                  className="mb-9 text-lg font-semibold text-white "
                  text="About Us"
                />
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <SimpleButton
                        extraClass="mb-3 inline-block"
                        text={item.text}
                        href={item.href}
                        color="text-gray-7"
                        hoverColor="hover:text-primary"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </FooterItem>

            <FooterItem extraClass="sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="w-full">
                <Heading
                  text="Features"
                  className="mb-9 text-lg font-semibold text-white "
                />
                <ul>
                  {featuresItems.map((item, index) => (
                    <li key={index}>
                      <SimpleButton
                        extraClass="mb-3 inline-block"
                        text={item.text}
                        href={item.href}
                        color="text-gray-7"
                        hoverColor="hover:text-primary"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </FooterItem>

            <FooterItem extraClass="md:w-2/3 lg:w-6/12 xl:w-3/12">
              <div className="w-full">
                <Heading
                  text="Latest blog"
                  className="mb-9 text-lg font-semibold text-white "
                />
                <Blog />
              </div>
            </FooterItem>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
