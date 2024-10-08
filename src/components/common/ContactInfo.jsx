import React from "react";

import { EmailIcon } from "../svg/Email";
import { LocationIcon } from "../svg/Location";
import InfoCard from "./InfoCard";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <LocationIcon />,
      title: "Our Location",
      description: "401 Broadway, 24th Floor, Orchard Cloud View, London",
    },
    {
      icon: <EmailIcon />,
      title: "Email Us",
      description: "info@yourdomain.com contact@yourdomain.com",
    },
  ];

  return (
    <>
      {contactInfo.map((info, index) => (
        <InfoCard
          key={index}
          icon={info.icon}
          title={info.title}
          description={info.description}
        />
      ))}
    </>
  );
};

export default ContactInfo;
