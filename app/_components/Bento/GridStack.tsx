import React from "react";
import GridItem from "./GridItem";
import Marquee from "react-fast-marquee";
type Tech = {
  name: string;
  icon: any;
  desc: string;
};

type TechRows = "one" | "two" | "three";

const stack: Record<TechRows, Tech[]> = {
  one: [
    {
      name: "TypeScript",
      icon: "",
      desc: "A typed superset of JavaScript that compiles to plain JavaScript",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwindcss",
      desc: "A utility-first CSS framework for rapidly building custom designs",
    },
    {
      name: "HTML",
      icon: "html",
      desc: "Hypertext Markup Language",
    },
    {
      name: "CSS",
      icon: "css",
      desc: "Cascading Style Sheets",
    },
    {
      name: "JavaScript",
      icon: "javascript",
      desc: "A high-level, interpreted programming language",
    },
    {
      name: "Python",
      icon: "python",
      desc: "An interpreted high-level programming language for general-purpose programming",
    },
  ],
  two: [
    {
      name: "React",
      icon: "react",
      desc: "A JavaScript library for building user interfaces",
    },
    {
      name: "Next.js",
      icon: "nextjs",
      desc: "A React framework for production",
    },
    {
      name: "Astro",
      icon: "astro",
      desc: "A new kind of static site builder",
    },
    {
      name: "Svelte",
      icon: "svelte",
      desc: "Cybernetically enhanced web apps",
    },
  ],
  three: [
    {
      name: "Zustand",
      icon: "zustand",
      desc: "Bear necessities for global state",
    },
    {
      name: "React-Query",
      icon: "reactquery",
      desc: "Hooks for fetching, caching and updating asynchronous data in React",
    },
    {
      name: "Zod",
      icon: "zod",
      desc: "Type checking and schema validation for TypeScript",
    },
    {
      name: "Supabase",
      icon: "supabase",
      desc: "The open source Firebase alternative",
    },
    {
      name: "Drizzle",
      icon: "drizzle",
      desc: "Redux for Solidity",
    },
  ],
};

const TechItem = ({ tech }: any) => {
  return (
    <div className="transition-all duration-500 min-w-40 flex ml-2 items-center justify-center text-sm  px-4 py-2 rounded-full border shadow-sm border-red-200 bg-gradient-to-tr from-zinc-50 text-red-800 to-white ">
      <div></div>
      {tech.name}
    </div>
  );
};

const GridStack = () => {
  return (
    <GridItem className="col-span-2 border-none shadow-none bg-white">
      <div className="flex flex-col h-full  py-3 place-content-center items-center bg-white">
        <div className="flex w-full gap-4 py-2   overflow-hidden">
          <Marquee speed={12} gradient gradientWidth={30} delay={-6}>
            {stack.one.map((tech) => {
              return <TechItem tech={tech} />;
            })}
          </Marquee>
        </div>
        <div className="flex w-full   gap-4 py-2  overflow-hidden">
          <Marquee speed={15} gradient gradientWidth={30} delay={-2}>
            {stack.two.map((tech) => {
              return <TechItem tech={tech} />;
            })}
          </Marquee>
        </div>
        <div className="flex w-full   gap-4 py-2  overflow-hidden">
          <Marquee speed={18} gradient gradientWidth={30}>
            {stack.three.map((tech) => {
              return <TechItem tech={tech} />;
            })}
          </Marquee>
        </div>
        <div className="flex w-full   gap-4 py-2  overflow-hidden">
          <Marquee speed={21} gradient gradientWidth={30} delay={-20}>
            {stack.one.map((tech) => {
              return <TechItem tech={tech} />;
            })}
          </Marquee>
        </div>
      </div>
    </GridItem>
  );
};

export default GridStack;
