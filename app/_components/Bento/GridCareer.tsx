import React from "react";
import GridItem from "./GridItem";

type CareerType = {
  title: string;
  description: string;
  location: string;
  yearFrom: string;
  yearTo: string;
};
const Career: CareerType[] = [
  {
    title: "Software Developer",
    description: "Summer intern",
    location: "Norkart",
    yearFrom: "2024",
    yearTo: "current",
  },
  {
    title: "Noroff Vocational School",
    description: "Frontend Development",
    location: "Noroff",
    yearFrom: "2022",
    yearTo: "2024",
  },
  {
    title: "University of Stavanger",
    description: "Computer Science",
    location: "Norkart",
    yearFrom: "2021",
    yearTo: "2022",
  },
];

const CareerItem = ({ career }: { career: CareerType }) => {
  return (
    <div className="h-auto py-2 border-l relative border-zinc-500 flex flex-col items-end justify-center text-sm text-zinc-400">
      <span className="absolute size-2 rounded-full bg-zinc-500  -left-[4px]"></span>
      <div className="w-[80%]">
        <p className=" text-xs flex gap-2 items-center justify-center w-fit">
          <span className="size-2 border bg-red-400 border-red-200 rounded-full flex"></span>
          {career.location}
        </p>
        <p className="text-zinc-600">{career.title}</p>
        <p className="text-zinc-400 text-xs">{career.description}</p>
        <div className="flex items-center gap-2 text-xs">
          <p className="text-zinc-400">{career.yearFrom}</p>
          <p className="text-zinc-400">—</p>
          <p className="text-zinc-400">{career.yearTo}</p>
        </div>
      </div>
      <div className=" h-4"></div>
    </div>
  );
};

const GridCareer = () => {
  return (
    <GridItem className="relative group ">
      <div className="w-full h-12 rounded-t  flex items-center px-4 text-sm text-zinc-500">
        <div className="bg-gradient-to-tr from-zinc-100 via-white text-xs  to-white shadow-sm px-8 border border-zinc-200 py-1 rounded-full flex items-center justify-center gap-3 group-hover:gap-4 duration-300 group-hover:text-red-400">
          <span>
            <svg
              className=" size-6 stroke-red-400 fill-red-400"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.5 7.5h7m-3.002 4h6.669m-6.669-2H12.5m-3.002 4H17.5"
              />
            </svg>
          </span>
          Experience
        </div>
      </div>
      <div className="w-full h-[calc(100%_-_3rem)] px-4 py-2 rounded-b flex flex-col  overflow-y-scroll overflow-x-hidden">
        {Career.map((car: CareerType, index: number) => {
          return <CareerItem key={car.title} career={car} />;
        })}
      </div>
    </GridItem>
  );
};

export default GridCareer;
