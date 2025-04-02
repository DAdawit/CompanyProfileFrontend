import FadeInUp from "@/common/Animations/FadeInUp";
import SocialMeadiaLinks from "@/common/SocialMeadiaLinks";
import { OurTeamOutI } from "@/types/OurTeamOut";
import Image from "next/image";
import React from "react";

interface PropTypes {
  our_team: OurTeamOutI;
}
export default async function OurTeam({ our_team }: PropTypes) {
  return (
    <div className="">
      <FadeInUp>
        <div className="flex justify-center mb-6 md:mb-12">
          <div className="sm:max-w-md text-center">
            <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
              Our Experts Team
            </h2>
            <p>
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at qui.
            </p>
          </div>
        </div>
      </FadeInUp>

      <div className="grid grid-cols-4 gap-6 text-center h-max">
        {our_team.data.map((member) => (
          <div
            className="col-span-4 md:col-span-2 lg:col-span-1 h-full flex flex-col items-center justify-between"
            key={member.id}
          >
            <Image
              src={`${member.image.url}`}
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
              <SocialMeadiaLinks links={member.SocialLinks} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
