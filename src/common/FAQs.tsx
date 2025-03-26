"use client";
import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FaqsOutI } from "@/types/FaqsOut";

interface PropType {
  faqs: FaqsOutI;
}
export default function FAQs({ faqs }: PropType) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="ezy__faq12 light py-14 md:py-24 bg-white">
      <div className="container px-16 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center mb-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-11 text-center">
            <h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
              {faqs.data.title}
            </h2>
            <p className="text-lg opacity-70">{faqs.data.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <div className="bg-white shadow dark:shadow-none p-6">
              {faqs.data.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${
                    openFaqIndex === index ? "active" : ""
                  } border-b border-gray-200`}
                >
                  <button
                    className="btn px-0 py-4 w-full text-start flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    {openFaqIndex === index ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <ArrowDropDownIcon />
                    )}
                  </button>
                  <div
                    className={`${
                      openFaqIndex === index ? "block" : "hidden"
                    } border-l-2 border-blue-600 mb-4`}
                  >
                    <div className="px-6">
                      <p className="opacity-50">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
