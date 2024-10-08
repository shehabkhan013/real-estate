import React from "react";

import Properties from "./common/Properties";
import SectionTitle from "./common/SectionTitle";

const Available = () => {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <SectionTitle
            tag="Properties"
            titleText="Grab your Dream Property"
            text="There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form."
          />
        </div>
        <Properties />
      </div>
    </section>
  );
};

export default Available;
