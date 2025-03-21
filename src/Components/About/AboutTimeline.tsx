import { TimeLineEventsOutI } from "@/types/TimeLineEventsOut";
import React from "react";

interface PropType {
  time_line_events: TimeLineEventsOutI;
}

const AboutPage: React.FC<PropType> = ({ time_line_events }) => {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            {time_line_events.data.title}
          </h2>
          <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 max-w-4xl">
            {time_line_events.data.description}
          </p>
          {/* Timeline */}
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute w-1 md:w-2 bg-black h-full left-1/2 transform -translate-x-1/2"></div>
              {/* Timeline Items */}
              {time_line_events.data.timeLineEvents.map((item, index) => (
                <div
                  key={index}
                  className="mb-20 mt-20 flex items-center w-full"
                >
                  {/* Left Side */}
                  <div className="w-1/2 text-right pr-5 md:pr-12">
                    <h5 className="text-lg md:text-2xl font-semibold">
                      {item.date_of_event}
                    </h5>
                  </div>
                  {/* Circle */}
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
                  {/* Right Side */}
                  <div className="w-1/2 pl-5 md:pl-12">
                    <h6 className="text-md md:text-xl font-semibold mb-3">
                      {item.event}
                    </h6>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
