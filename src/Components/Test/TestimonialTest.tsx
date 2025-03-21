import React from "react";

interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

interface AboutTimelineProps {
  timelineData: TimelineItem[];
}

const AboutTimeline: React.FC<AboutTimelineProps> = ({ timelineData }) => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Our Timeline
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>
        {/* Timeline */}
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute w-1 md:w-2 bg-black h-full left-1/2 transform -translate-x-1/2"></div>
            {/* Timeline Items */}
            {timelineData.map((item, index) => (
              <div key={index} className="mb-20 mt-20 flex items-center w-full">
                {/* Left Side */}
                <div className="w-1/2 text-right pr-5 md:pr-12">
                  <h5 className="text-lg md:text-2xl font-semibold">
                    {item.time}
                  </h5>
                </div>
                {/* Circle */}
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
                {/* Right Side */}
                <div className="w-1/2 pl-5 md:pl-12">
                  <h6 className="text-md md:text-xl font-semibold mb-3">
                    {item.title}
                  </h6>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const timelineData = [
  {
    time: "August 2014",
    title: "Started the company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.",
  },
  {
    time: "September 2016",
    title: "First Client",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.",
  },
  {
    time: "January 2017",
    title: "Hired our first Dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.",
  },
  {
    time: "May 2017",
    title: "Raised $5M",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.",
  },
];

const AboutPage = () => {
  return (
    <div>
      <AboutTimeline timelineData={timelineData} />
    </div>
  );
};

export default AboutPage;
