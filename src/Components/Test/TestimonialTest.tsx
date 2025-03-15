import React from "react";

export const CallToAction5 = () => {
  return (
    <section className="ezy__cta5 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4">
        <div className="grid grid-cols-12 text-center">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:px-12">
            <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
              Join with us for more information
            </h2>

            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-8 sm:col-start-3">
                <p className="text-lg opacity-75 mb-12">
                  It’s easier to reach your savings goals when you have the
                  right savings account.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="px-7 py-3 h-12 bg-blue-600 text-white hover:bg-opacity-90 rounded"
            >
              Quote Now
            </button>
            <div>
              <img
                src="https://cdn.easyfrontend.com/pictures/cta/cta_5.png"
                alt=""
                className="max-w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
