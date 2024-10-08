import React from "react";

import FeatureCard from "./common/FeatureCard";
import SectionTitle from "./common/SectionTitle";
import { GiftIcon } from "./svg/Gift";
import { LayoutIcon } from "./svg/Layout";
import { SupportIcon } from "./svg/Support";
import { ToursIcon } from "./svg/Tours";

const featuresData = [
  {
    icon: <GiftIcon />,
    title: "Premium Property Listings",
    description:
      "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
    buttonText: "Learn More",
    buttonLink: "https://example.com",
  },
  {
    icon: <LayoutIcon />,
    title: "Personalized Property Matching",
    description:
      "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
    buttonText: "Learn More",
    buttonLink: "https://example.com",
  },
  {
    icon: <SupportIcon />,
    title: "Expert Guidance and Support",
    description:
      "Benefit from the expertise of our dedicated team of real estate professionals.",
    buttonText: "Learn More",
    buttonLink: "https://example.com",
  },
  {
    icon: <ToursIcon />,
    title: "Virtual Tours",
    description:
      "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
    buttonText: "Learn More",
    buttonLink: "https://example.com",
  },
];
const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <SectionTitle
                tag="Features"
                titleText="Main Features Of Play"
                text="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              />
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              buttonLink={feature.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
