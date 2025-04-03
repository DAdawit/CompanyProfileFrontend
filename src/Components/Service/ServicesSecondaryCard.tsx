import { ServicesComponent } from "@/types/ServicesOut";
import Image from "next/image";
import React from "react";
interface PropType {
  service: ServicesComponent;
}
const ServicesSecondaryCard: React.FC<PropType> = ({ service }) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-white dark:bg-primary-800/50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50/20 dark:hover:from-primary-800 dark:hover:to-accent-800/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group">
      <Image
        src={`${service?.icon?.url}`}
        alt="spector"
        width={100}
        height={200}
        className="h-14 object-contain"
      />{" "}
      <h2 className="text-xl font-semibold capitalize text-primary-900 dark:text-primary-100 group-hover:text-primary-700">
        {service?.title}
      </h2>
      <p className="text-primary-600 dark:text-primary-300 group-hover:text-primary-700">
        {service?.description}
      </p>
    </div>
  );
};

export default ServicesSecondaryCard;
