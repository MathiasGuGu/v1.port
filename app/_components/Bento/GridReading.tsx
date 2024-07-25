"use client";
import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import Image from "next/image";
import ReadingImage from "@/public/reading.png";

const GridReading = () => {
  return (
    <GridItem className=" col-span-1 relative overflow-hidden group">
      <div className=" absolute top-2 left-2 bg-gradient-to-tr from-zinc-100 via-white text-xs w-fit  to-white shadow-sm px-8 border border-zinc-200 py-1 rounded-full flex items-center justify-center gap-3 group-hover:gap-4 duration-300 group-hover:text-red-400">
        <span>
          <svg
            className=" size-4 fill-red-400 stroke-red-400 outline-red-500"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M216 32v160a8 8 0 0 1-8 8H72a16 16 0 0 0-16 16h136a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8V56a32 32 0 0 1 32-32h136a8 8 0 0 1 8 8" />
          </svg>
        </span>
        Reading
      </div>
      <div className="pt-20 pl-4">
        <p className="max-w-sm text-base font-bold text-zinc-600">
          Writing An
          <br /> Interpreter In Go
        </p>
        <p className="text-sm text-zinc-400">Thorsten Ball</p>
      </div>
      <Image
        src={ReadingImage}
        alt="book cover"
        className=" absolute rotate-12 -bottom-5 -right-5 rounded shadow-xl group-hover:rotate-6 duration-500"
        width={1500 / 9}
        height={1500}
      ></Image>
    </GridItem>
  );
};

export default GridReading;
