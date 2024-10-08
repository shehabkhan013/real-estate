import React from "react";

import Button from "./Button";
import Heading from "./Heading";
import Text from "./Text";

const Info = () => {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="mb-12 max-w-[540px] lg:mb-0">
        <Heading
          tag="h2"
          text="Innovative Tools for Real Estate Excellence"
          className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]"
        />
        <Text
          extraClass="mb-6 text-base leading-relaxed text-body-color dark:text-dark-6"
          text="The main thrust is to focus on educating our clients on how to best navigate the real estate market with interactive guides and personalized consultations led by industry experts."
        />
        <Text
          extraClass="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6"
          text="The main ‘thrust' is to focus on educating attendees on how to best
          protect highly vulnerable business applications with interactive
          panel."
        />
        <Button
          text="Know More"
          href="javascript:void(0)"
          color="text-white"
          backgroundColor="bg-primary"
          hoverBgColor="hover:bg-blue-dark"
          hoverColor="hover:text-white"
        />
      </div>
    </div>
  );
};

export default Info;
