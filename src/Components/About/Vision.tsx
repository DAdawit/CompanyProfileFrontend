import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mb-8 text-3xl font-bold md:text-5xl md:mb-10">
          Meet Flowspark
        </h2>
        <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base md:mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <Image
            alt="hello"
            height={500}
            width={500}
            src="https://img.freepik.com/free-photo/business-strategy-success-target-goals_1421-33.jpg?uid=R190071028&ga=GA1.1.986869192.1741105703&semt=ais_hybrid"
            className="inline-block h-full w-full rounded-2xl object-cover"
            unoptimized
          />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-12">
            <h2 className="text-3xl font-bold md:text-5xl">Our Vision</h2>
            <p className="text-sm text-gray-500 sm:text-base">
              Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
              bibendum ut. Vestibulum lorem sed risus ultricies tristique nulla.
              Vitae et leo duis ut diam quam. Bibendum arcu vitae elementum
              curabitur vitae nunc. Dictumst vestibulum rhoncus est
              pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
              dignissim cras tincidunt lobortis feugiat vivamus.
              <br />
              <br />
              Massa id neque aliquam vestibulum morbi blandit. Nulla
              pellentesque dignissim enim sit amet venenatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
