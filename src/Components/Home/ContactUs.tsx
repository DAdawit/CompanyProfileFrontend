"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkIcon from "@mui/icons-material/Link";
const contactInfoList = [
  {
    icon: <EmailIcon />,
    label: "email@easyfrontend.com",
    href: "mailto:email@easyfrontend.com",
  },
  {
    icon: <LocalPhoneIcon />,
    label: "+880 1742-0****0",
    href: "callto:+880 1742-0****0",
  },
  { icon: <LinkIcon />, label: "easyfrontend.com", href: "easyfrontend.com" },
];

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  console.log(validated);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <form className="" noValidate onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className="min-h-[48px] leading-[48px] border  rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Name"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="min-h-[48px] leading-[48px] border rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Email"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          className="min-h-[48px] leading-[48px] border rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Message"
          rows={4}
        ></textarea>
      </div>
      <div className="text-start">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const ContactFormCard = () => (
  <div className=" bg-white shadow-xl rounded-2xl p-6 md:p-12 text-gray-900">
    <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
      Contact Us
    </h2>
    <p className="text-lg mb-12">
      We list your menu online, help you process orders.
    </p>

    <ContactForm />
  </div>
);

interface ContactInfoProps {
  contactInfoList: Array<{
    icon: React.ReactElement;
    label: string;
    href: string;
  }>;
}

const ContactInfo = ({ contactInfoList }: ContactInfoProps) => (
  <div className="flex flex-col h-full mt-12 md:pt-6">
    {contactInfoList.map((info, i) => (
      <div
        className={classNames(
          "bg-white shadow max-w-[350px] flex items-center rounded-xl p-5 text-gray-900",
          { " mt-6": i }
        )}
        key={i}
      >
        {info.icon}
        <a className="text-lg font-medium ml-4" href={info.href || "#!"}>
          {info.label}
        </a>
      </div>
    ))}
  </div>
);

ContactInfo.propTypes = {
  contactInfoList: PropTypes.array.isRequired,
};

export const ContactUs = () => {
  return (
    <section className="ezy__contact12 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden ">
      <div
        className="absolute right-0 left-0 bottom-0 top-64 py-14 bg-cover bg-center bg-no-repeat block md:block"
        style={{
          backgroundImage:
            "url(https://cdn.easyfrontend.com/pictures/contact/contact_12.svg)",
        }}
      ></div>
      <div className="container px-4 relative">
        <div className="grid grid-cols-12 mx-auto max-w-7xl">
          <div className="col-span-12 lg:col-span-7 xl:col-span-5 mb-12 lg:mb-0">
            <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6">
              How can we help you?
            </h2>
            <p className="text-lg">
              It’s easier to reach your savings goals when you have the right
              savings account. Take a look and find the right one for you!
            </p>

            <ContactInfo contactInfoList={contactInfoList} />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};
