import { ServicesComponent } from "@/types/ServicesOut";
import Image from "next/image";
import React from "react";
interface PropType {
  service: ServicesComponent;
}
const ServicesPrimaryCard: React.FC<PropType> = ({ service }) => {
  return (
    <div key={service.id} className="col-span-6 md:col-span-3 lg:col-span-2">
      <div className="h-full">
        <div className="bg-white shadow-xl rounded-xl h-full">
          <div className="p-6 md:p-12">
            <div className="w-[75px] h-[75px] rounded-full text-[26px] shadow-xl flex justify-center items-center mb-6">
              <Image
                src={`${service.icon.url}`}
                alt="spector"
                width={100}
                height={200}
                className="h-14 object-contain"
              />{" "}
            </div>
            <h4 className="text-2xl mb-6 font-bold">{service.title}</h4>
            <p className="opacity-70 leading-[1.8]">{service.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPrimaryCard;
