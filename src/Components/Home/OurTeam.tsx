import SocialMeadiaLinks from "@/common/SocialMeadiaLinks";
import { fetchOutTeam } from "@/services/main.services";
import Image from "next/image";
import React from "react";

export default async function OurTeam() {
  const our_team = await fetchOutTeam();
  return (
    <div>
      {/* <pre>{JSON.stringify(our_team, null, 2)}</pre> */}

      <div className="bg-bgThird mt-15 pb-5">
        <div className="flex flex-col justify-center items-center gap-5 pt-10">
          <h1 className=" text-primary font-sans text-sm font-medium capitalize">
            Meet our TEAM
          </h1>
        </div>

        <div className="grid sm:flex sm:flex-row justify-evenly mt-5">
          {our_team.data.map((team) => (
            <div key={team.id} className="p-3 grid items-center  w-96">
              <div className="grid sm:flex sm:flex-row justify-evenly mt-5 px-5">
                <div className="group relative max-w-96">
                  <Image
                    src={`http://localhost:8000${team.image.url}`}
                    height={300}
                    width={200}
                    alt="breakfast"
                    className="w-full rounded-lg object-contain h-96"
                  />
                  <div className="absolute top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-primary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                    {/* <pre>{JSON.stringify(team.SocialLinks, null, 2)}</pre> */}

                    <SocialMeadiaLinks links={team.SocialLinks} />
                  </div>
                </div>
              </div>
              <div className="px-7 flex flex-col gap-2">
                <h1 className="text-secondary  tracking-wider font-sans mt-5 text-2xl">
                  {team.full_name}
                </h1>
                <h1 className="text-primary text-sm  font-sans tracking-wider">
                  {team.role}
                </h1>
                <p className="text-sm text-gray-300 text-start font-serif tracking-wide">
                  {team.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
