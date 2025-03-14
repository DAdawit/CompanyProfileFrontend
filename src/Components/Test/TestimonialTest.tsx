import React from "react";
// import {
//   faFacebookF,
//   faLinkedinIn,
//   faTwitter,
//   faBehance,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const teamMembers = [
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user25.jpg",
    fullName: "Akshay Kumar",
    designation: "Founder / CEO",
    bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user5.jpg",
    fullName: "Raima Ray",
    designation: "Business Head",
    bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
    fullName: "Arjun Kapur",
    designation: "UI Design",
    bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user6.jpg",
    fullName: "Alia Bhatt",
    designation: "Marketing Head",
    bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user21.jpg",
    fullName: "Carl Paxton",
    designation: "Marketing",
    bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user10.jpg",
    fullName: "Lisa Bain",
    designation: "Marketing",
    bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
    socialLinks: [
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
      { icon: <LinkedInIcon />, href: "#" },
    ],
  },
];

interface TeamMember {
  picture: string;
  fullName: string;
  designation: string;
  bio: string;
  socialLinks: { icon: JSX.Element; href: string }[];
}

const TeamMemberItem: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="group rounded-xl overflow-hidden duration-500 relative h-full hover:-translate-y-1">
    <img src={member.picture} alt={member.fullName} className="h-auto w-full" />
    <div className="text-white absolute top-0 left-0 right-0 bottom-0 rounded-xl bg-blue-600 bg-opacity-60 backdrop-blur scale-90 transition duration-500 opacity-0 flex flex-col justify-center items-center group-hover:scale-100 group-hover:opacity-100 text-center p-6 lg:px-12">
      <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
      <p className="text-sm mb-4">{member.designation}</p>
      <p className="opacity-75">{member.bio}</p>
      <div className="mt-6">
        {member.socialLinks.map((item, i) => (
          <a
            href={item?.href}
            className={i + 1 !== member.socialLinks.length ? "mr-3" : undefined}
            key={i}
          >
            {item.icon}
            {/* <FontAwesomeIcon icon={item.icon} /> */}
          </a>
        ))}
      </div>
    </div>
  </div>
);

TeamMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
};

export const TeamMember7 = () => {
  return (
    <section className="ezy__team7 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-6 md:mb-12">
          <div className="max-w-lg text-center">
            <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
              Our Experts Team
            </h2>
            <p className="">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at qui.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-6">
          {teamMembers.map((member, i) => (
            <div className="col-span-6 sm:col-span-3 lg:col-span-2" key={i}>
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
