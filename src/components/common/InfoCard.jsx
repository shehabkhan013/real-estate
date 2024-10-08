import React from "react";

const InfoCard = ({ icon, title, description, extraClass = "" }) => {
  return (
    <div className={`mb-8 flex w-[330px] max-w-full ${extraClass}`}>
      <div className="mr-6 text-[32px] text-primary">{icon}</div>
      <div>
        <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
          {title}
        </h5>
        <p className="text-base text-body-color dark:text-dark-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
