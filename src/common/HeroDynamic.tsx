import Image from "next/image";

type PropType = {
  title: string | undefined;
  image?: string | undefined;
};

const HeroDynamic: React.FC<PropType> = ({ title, image }) => {
  return (
    <>
      <div className="h-[70vh]  xl:max-h-[60vh] xll:max-h-[60vh] relative">
        <Image
          src={`http://localhost:8000${image}`}
          alt="hero image"
          height={2000}
          width={2000}
          className="h-[70vh] xl:max-h-[70vh] xll:max-h-[60vh] w-screen object-cover brightness-50"
        />
        <div className="absolute h-full top-0 w-full flex  text-white ">
          <div className="flex flex-col justify-center w-full col-span-2 px-5">
            <div className="align-middle sm:pl-8">
              <h1 className="text-3xl  xl:text-4xl  xxl:text-6xl font-bold ">
                About Us
              </h1>
              <p className="text-sm mt-8 xxl:text-lg ">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroDynamic;
