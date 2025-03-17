import SocialMeadiaLinksIconsOnly from "@/common/SocialMeadiaLinksIconsOnly";
import { fetchOutTeam } from "@/services/main.services";
import Image from "next/image";
import React from "react";

export default async function OurTeam() {
  const our_team = await fetchOutTeam();
  return (
    <div className="container px-4 mx-auto">
      <div className="flex justify-center mb-6 md:mb-12">
        <div className="sm:max-w-md text-center">
          <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
            Our Experts Team
          </h2>
          <p>
            Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam
            maiores, illum at qui.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 text-center h-max">
        {our_team.data.map((member) => (
          <div
            className="col-span-4 md:col-span-2 lg:col-span-1 h-full flex flex-col items-center justify-between"
            key={member.id}
          >
            <Image
              src={`http://localhost:8000${member.image.url}`}
              alt={member.full_name}
              className="w-46 h-46 rounded-full mx-auto"
              height={300}
              width={300}
              unoptimized={true}
            />
            <div className="px-4 py-4 xl:px-6 flex-grow">
              <h4 className="text-2xl font-medium mb-2">{member.full_name}</h4>
              <h6 className="font-medium">{member.role}</h6>
              <p className="opacity-50 mb-0">{member.bio}</p>
            </div>
            <div className="">
              <SocialMeadiaLinksIconsOnly links={member.SocialLinks} />
            </div>
          </div>
        ))}
      </div>

      {/* <div className="container py-14 md:py-10 bg-white ">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center mb-6 md:mb-12">
            <div className="max-w-lg text-center">
              <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
                Our Experts Team
              </h2>
              <p className="">
                Assumenda non repellendus distinctio nihil dicta sapiente,
                quibusdam maiores, illum at qui.
              </p>
            </div>
          </div>
        </div> */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 mt-10  content-evenly gap-3 justify-evenly space-x-6">
          {our_team.data.map((member) => (
            <div
              key={member.id}
              className="group rounded-xl overflow-hidden duration-500 relative h-full hover:-translate-y-1 max-w-80"
            >
              <Image
                src={`http://localhost:8000${member.image.url}`}
                alt={member.full_name}
                height={300}
                width={200}
                className="h-80 w-full"
              />
              <div className="text-white absolute top-0 left-0 right-0 bottom-0 rounded-xl  bg-opacity-60 backdrop-blur scale-90 transition duration-500 opacity-0 flex flex-col justify-center items-center group-hover:scale-100 group-hover:opacity-100 text-center p-6 lg:px-12">
                <h4 className="text-2xl font-medium mb-1">
                  {member.full_name}
                </h4>
                <p className="text-sm mb-4">{member.role}</p>
                <p className="opacity-75">{member.bio}</p>
                <div className="mt-6">
                  <SocialMeadiaLinksIconsOnly links={member.SocialLinks} />
                </div>
              </div>
            </div>
          ))}
        </div> */}
    </div>
    // </div>
  );
}
