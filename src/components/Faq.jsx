import React from "react";

import Faqs from "./common/Faqs";
import SectionTitle from "./common/SectionTitle";
import { VerticalParticle } from "./svg/VerticalParticle";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <SectionTitle
                tag="FAQ"
                titleText="Any Questions? Look Here"
                text="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              />
            </div>
          </div>
        </div>
        <Faqs />
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <VerticalParticle />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <VerticalParticle />
        </span>
      </div>
    </section>
  );
};

export default Faq;
