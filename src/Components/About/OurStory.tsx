import React from "react";
interface PropType {
  title: string;
  description?: string;
  history?: string;
}

const DynamicTitleAndDescription = ({
  title,
  description,
  history,
}: PropType) => {
  return (
    <div className="grid grid-cols-12 justify-center mb-12">
      <div className="col-span-12 md:col-span-8 md:col-start-3">
        <h2 className="text-4xl leading-snug md:text-5xl md:leading-snug font-bold mb-6 text-center">
          {title}
        </h2>
        <p className="text-lg md:text-xl opacity-80 mb-4 px-5 text-center ">
          {description}
        </p>
        <p className="text-xl opacity-80 mb-2">{history}</p>
      </div>
    </div>
  );
};

export default DynamicTitleAndDescription;
