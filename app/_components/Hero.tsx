"use client";
import React, { useState } from "react";
import AskAiModal from "./OpenAi/AskAiModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-screen h-auto px-24 pt-24">
      {isModalOpen && <AskAiModal setIsOpen={setIsModalOpen} />}
      <div className=" size-20 bg-white rounded flex items-center flex-wrap gap-1">
        <div className="size-9 rounded bg-zinc-100"></div>
        <div className="size-9 rounded bg-white"></div>
        <div className="size-9 rounded-full bg-zinc-100"></div>
        <div className="size-9 rounded bg-zinc-100"></div>
      </div>
      <article className="flex flex-col gap-4">
        <h1 className="text-3xl max-w-3xl">
          Hi, I'm Mathias — I'm a Software Developer at Norkart.
          <span className=" text-zinc-300 font-bold">
            {" "}
            Summer 2024 Graduate
          </span>
        </h1>
        <p className="max-w-2xl text-balance text-zinc-500">
          I am a seasoned software developer with 3+ years of experience with
          developing fast and scalable web solutions.
        </p>
      </article>
      <section className="flex gap-2 text-sm text-zinc-600">
        <button
          onClick={() => setIsModalOpen(() => true)}
          className="bg-gradient-to-tr from-zinc-100 via-white   to-white shadow-sm px-24 border border-zinc-200 py-2 rounded-full flex items-center justify-center gap-3 hover:gap-4 duration-300 group hover:text-red-400"
        >
          Ask AI{" "}
          <span className=" group-hover:rotate-45 duration-500">
            <svg
              viewBox="0 0 24 24"
              className=" stroke-red-400 fill-red-400 size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2m0-12a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2M9 18a6 6 0 0 1 6-6a6 6 0 0 1-6-6a6 6 0 0 1-6 6a6 6 0 0 1 6 6"
              />
            </svg>
          </span>
        </button>
        <button className="bg-gradient-to-tr from-zinc-100 via-white   to-white shadow-sm px-8 border border-zinc-200 py-2 rounded-full flex items-center justify-center gap-3 hover:gap-5 duration-300 hover:text-red-400">
          Contact me{" "}
          <span>
            <svg className="size-5 stroke-red-400" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"
              />
            </svg>
          </span>
        </button>
        <span className="text-xs border border-zinc-100 bg-zinc-50 flex items-center justify-center px-3 gap-2  text-zinc-500 rounded-full ml-4">
          <span className=" animate-pulse size-4 bg-green-400  border-4  border-green-200 rounded-full"></span>
          Available for work
        </span>
      </section>
    </div>
  );
};

export default Hero;
