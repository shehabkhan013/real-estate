import React from "react";

import { FacebookIcon } from "../svg/Facebook";
import { InstagramIcon } from "../svg/Instagram";
import { LinkedinIcon } from "../svg/Linkedin";
import { TwitterIcon } from "../svg/Twitter";
import SocialIcon from "./SocialIcon";

const FooterInfo = ({ logoSrc, logoAlt, description }) => {
  return (
    <div className="mb-10 w-full">
      <a href="#" className="mb-6 inline-block max-h-[100px]">
        <img src={logoSrc} alt={logoAlt} className="max-w-full" />
      </a>
      <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
        {description}
      </p>
      <div className="-mx-3 flex items-center">
        <SocialIcon
          className="px-3 text-gray-7 hover:text-white"
          href="https://facebook.com"
          icon={<FacebookIcon />}
        />
        <SocialIcon
          className="px-3 text-gray-7 hover:text-white"
          href="https://twitter.com"
          icon={<TwitterIcon />}
        />
        <SocialIcon
          className="px-3 text-gray-7 hover:text-white"
          href="https://instagram.com"
          icon={<InstagramIcon />}
        />
        <SocialIcon
          className="px-3 text-gray-7 hover:text-white"
          href="https://linkedin.com"
          icon={<LinkedinIcon />}
        />
      </div>
    </div>
  );
};

export default FooterInfo;
