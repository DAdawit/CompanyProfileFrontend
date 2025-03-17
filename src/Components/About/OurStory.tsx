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
    <div className="grid grid-cols-12 justify-center text-center mb-12">
      <div className="col-span-12 md:col-span-8 md:col-start-3">
        <h2 className="text-4xl leading-snug md:text-5xl md:leading-snug font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl opacity-80 mb-4">{description}</p>
        <p className="text-xl opacity-80 mb-4">{history}</p>
      </div>
    </div>
  );
};

export default DynamicTitleAndDescription;
