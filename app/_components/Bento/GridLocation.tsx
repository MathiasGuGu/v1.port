import React from "react";
import GridItem from "./GridItem";
import Image from "next/image";
import locationImage from "@/public/location.png";
const GridLocation = () => {
  return (
    <GridItem className=" isolate col-span-2 group relative flex items-center justify-center group">
      <span className="absolute left-56 top-24 opacity-0 group-hover:opacity-100 duration-500">
        <svg className=" size-8 fill-red-400" viewBox="0 0 32 32">
          <path d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4" />
          <circle cx="16" cy="13" r="4" fill="none" />
        </svg>
      </span>
      <Image
        src={locationImage}
        className="rounded w-[98%] h-[96%] object-cover"
        alt="Map over kristiansand, norway"
      ></Image>
      <div className="bg-gradient-to-tr absolute top-2 left-2 text-zinc-500 from-zinc-100 via-white text-xs  to-white shadow-sm px-8 border border-zinc-200 py-2 rounded-full flex items-center justify-center gap-3 group-hover:gap-4 duration-300 group-hover:text-red-400">
        <span>
          <svg className=" size-4 fill-red-400" viewBox="0 0 32 32">
            <path d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4" />
            <circle cx="16" cy="13" r="4" fill="none" />
          </svg>
        </span>
        Kristiansand, Norway
      </div>
    </GridItem>
  );
};

export default GridLocation;
