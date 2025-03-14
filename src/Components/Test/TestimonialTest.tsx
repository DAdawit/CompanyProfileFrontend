import React from "react";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const serviceList = [
  {
    icon: faCannabis,
    title: "Get more from life with Insurance",
    description:
      "Banking crises have developed many times throughout history when one or more risks have emerged for a banking sector as a whole.",
  },
  {
    icon: faCannabis,
    title: "Get more from life with Insurance",
    description:
      "Banking crises have developed many times throughout history when one or more risks have emerged for a banking sector as a whole.",
  },
  {
    icon: faCannabis,
    title: "Get more from life with Insurance",
    description:
      "Banking crises have developed many times throughout history when one or more risks have emerged for a banking sector as a whole.",
  },
];

interface Service {
  icon: any; // Replace 'any' with the appropriate type for the icon if known
  title: string;
  description: string;
}

const ServiceItem: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl h-full">
    <div className="p-6 md:p-12">
      <div className="w-[75px] h-[75px] rounded-full text-[26px] shadow-xl flex justify-center items-center mb-6">
        <ManageAccountsIcon />
      </div>
      <h4 className="text-2xl mb-6 font-bold">{service.title}</h4>
      <p className="opacity-70 leading-[1.8]">{service.description}</p>
    </div>
  </div>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

export const Service22 = () => {
  return (
    <section className="ezy__service22 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
      <div className="absolute bottom-0 left-0 right-0 h-1/2 w-full bg-blue-600 bg-opacity-30 -z-[1]" />
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-[45px] font-bold mb-6">
              Our Service
            </h2>
            <p className="text-lg opacity-80">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at, aliquid blanditiis eligendi qui nihil
              repellendus dicta sapiente.
            </p>
          </div>
          <div className="flex items-center md:justify-end">
            <button className="py-3 px-7 rounded bg-blue-600 hover:bg-opacity-90 text-white duration-300">
              See All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto mt-12">
          {serviceList.map((service, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl h-full">
                <div className="p-6 md:p-12">
                  <div className="w-[75px] h-[75px] rounded-full text-[26px] shadow-xl flex justify-center items-center mb-6">
                    <ManageAccountsIcon />
                  </div>
                  <h4 className="text-2xl mb-6 font-bold">{service.title}</h4>
                  <p className="opacity-70 leading-[1.8]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
