import React from "react";

import SectionTitle from "./common/SectionTitle";
import TeamCard from "./common/TeamCard";
import { FacebookIcon } from "./svg/Facebook";
import { InstagramIcon } from "./svg/Instagram";
import { TwitterIcon } from "./svg/Twitter";

const Team = () => {
  const teamMembers = [
    {
      imgSrc: "./images/team/team-01.png",
      imgAlt: "Melissa Tatcher",
      name: "Melissa Tatcher",
      title: "Marketing Expert",
      socialLinks: [
        { href: "https://facebook.com", icon: <FacebookIcon /> },
        { href: "https://x.com", icon: <TwitterIcon /> },
        { href: "https://instagram.com", icon: <InstagramIcon /> },
      ],
    },
    {
      imgSrc: "./images/team/team-02.png",
      imgAlt: "Stuard Ferrel",
      name: "Stuard Ferrel",
      title: "Digital Marketer",
      socialLinks: [
        { href: "https://facebook.com", icon: <FacebookIcon /> },
        { href: "https://x.com", icon: <TwitterIcon /> },
        { href: "https://instagram.com", icon: <InstagramIcon /> },
      ],
    },
    {
      imgSrc: "./images/team/team-03.png",
      imgAlt: "Eva Hudson",
      name: "Eva Hudson",
      title: "Creative Designer",
      socialLinks: [
        { href: "https://facebook.com", icon: <FacebookIcon /> },
        { href: "https://x.com", icon: <TwitterIcon /> },
        { href: "https://instagram.com", icon: <InstagramIcon /> },
      ],
    },
    {
      imgSrc: "./images/team/team-04.png",
      imgAlt: "Jackie Sanders",
      name: "Jackie Sanders",
      title: "Founder of Facebook",
      socialLinks: [
        { href: "https://facebook.com", icon: <FacebookIcon /> },
        { href: "https://x.com", icon: <TwitterIcon /> },
        { href: "https://instagram.com", icon: <InstagramIcon /> },
      ],
    },
  ];
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <SectionTitle
                tag="Our Team Members"
                titleText="Our Clients"
                text="There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form."
              />
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              imgSrc={member.imgSrc}
              imgAlt={member.imgAlt}
              name={member.name}
              title={member.title}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
