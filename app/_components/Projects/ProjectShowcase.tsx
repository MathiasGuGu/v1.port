import React from "react";
import { Rubik_Mono_One } from "next/font/google";

const exo = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });

const ProjectShowcase = () => {
  return (
    <div className="flex flex-col items-center justify-center px-24 mb-12">
      <article className="w-full h-96  overflow-hidden border-2   border-zinc-100 shadow-sm bg-gradient-to-br from-red-50 to-white   rounded-lg flex flex-col items-center justify-center relative px-4 py-4">
        <div className="py-2 px-8 absolute top-4 left-4 border border-red-900 rounded-full bg-red-900 text-red-300">
          <p className="text-xs">Working on</p>
        </div>
        <h3
          className={`${exo.className} text-6xl bg-gradient-to-r from-red-800  to-red-950 inline-block text-transparent bg-clip-text`}
        >
          CREATODORO
        </h3>
        <p className=" opacity-50 text-black">A creative way of working</p>
        <div className="w-full h-full relative flex items-center justify-between gap-3  text-red-600">
          <div className="w-[25%] h-[95%]  bg-red-400 rounded-lg -mb-32"></div>
          <div className="w-[50%] h-[95%]  bg-red-400 rounded-lg -mb-32"></div>
          <div className="w-[25%] h-[95%]  bg-red-400 rounded-lg -mb-32"></div>
        </div>
      </article>
    </div>
  );
};

export default ProjectShowcase;
