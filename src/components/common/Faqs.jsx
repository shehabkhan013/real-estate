import React from "react";

import { QuestionIcon } from "../svg/Question";
import TextIconList from "./TextIconList";
const textIconItems = [
  {
    title: "Is TailGrids Well-documented?",
    content:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content UI/UX strategy.",
  },
  {
    title: "How long does it take to build?",
    content:
      "Our process for building a website is efficient, and we usually deliver within 4 weeks, depending on the project.",
  },
  {
    title: "Do you offer customer support?",
    content:
      "Yes, we offer 24/7 customer support to ensure that all your queries are addressed promptly.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "We accept a variety of payment methods, including credit cards, PayPal, and bank transfers.",
  },
];
const Faqs = () => {
  return (
    <div className="-mx-4 flex flex-wrap">
      {textIconItems.map((item, index) => (
        <TextIconList
          key={index}
          icon={<QuestionIcon />} // Fixed icon passed here
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Faqs;
