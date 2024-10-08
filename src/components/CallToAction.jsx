import React from "react";

import Button from "./common/Button";
import Text from "./common/Text";
import Title from "./common/Title";
import { CtaLeft } from "./svg/CtaLeft";
import { CtaRight } from "./svg/CtaRight";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <Title
                  extraClass="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]"
                  text="What Are You Looking For?"
                  subtext="Get Started Now"
                  tag="h2"
                />
                <Text
                  text="There are many variations of passages of Lorem Ipsum but the
                  majority have suffered in some form."
                  extraClass="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white"
                />
                <Button
                  text="Let's have a meeting"
                  color="text-white"
                  backgroundColor="bg-secondary"
                  hoverBgColor="hover:bg-[#0BB489]"
                  hoverColor="hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0 text-white">
          <CtaLeft />
        </span>
        <span className="absolute bottom-0 right-0 text-white">
          <CtaRight />
        </span>
      </div>
    </section>
  );
};

export default CallToAction;
