"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Name"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Email"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Message"
          rows={4}
        ></textarea>
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-opacity-90 text-white px-10 py-3 rounded-md mb-4 w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export const ContactUs2 = () => {
  return (
    <section className="ezy__contact2 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div
        className="bg-no-repeat bg-cover py-14"
        style={{
          backgroundImage:
            "url('https://cdn.easyfrontend.com/pictures/contact/contact_2_1.png')",
        }}
      >
        <div className="container px-4">
          <div className="grid grid-cols-12 py-6">
            <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0">
              <div className="text-white">
                <h2 className="text-2xl font-bold md:text-[40px] leading-none mb-4 mt-0">
                  How can we help you?
                </h2>
                <p className="text-lg">
                  It’s easier to reach your savings goals when you have the
                  right savings account. Take a look and find the right one for
                  you!
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
              <div className="bg-white dark:bg-[#162231] rounded-2xl -mb-80 shadow-xl p-6 md:p-12">
                <h2 className="text-2xl font-bold md:text-[45px] mb-4">
                  Contact Us
                </h2>
                <p className="text-lg mb-12">
                  We list your menu online, help you process orders.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80"></div>
    </section>
  );
};
