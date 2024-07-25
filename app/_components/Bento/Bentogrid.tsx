import React from "react";
import GridCareer from "./GridCareer";
import GridLocation from "./GridLocation";
import GridProject from "./GridMusic";
import GridStack from "./GridStack";
import GridReading from "./GridReading";
import GridMusic from "./GridMusic";

const Bentogrid = () => {
  return (
    <div className="w-screen h-auto grid grid-rows-2 grid-cols-4 px-24 gap-4 mb-12">
      <GridCareer />
      <GridLocation />
      <GridReading />
      <GridMusic />
      <GridStack />
    </div>
  );
};

export default Bentogrid;
