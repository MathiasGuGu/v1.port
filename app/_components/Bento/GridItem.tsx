import React from "react";

const GridItem = ({
  children,
  className,
}: Readonly<{ children?: React.ReactNode; className?: string }>) => {
  return (
    <article
      className={`w-full h-64 border border-zinc-100 bg-gradient-to-tr from-zinc-50 to-white rounded shadow ${className}`}
    >
      {children}
    </article>
  );
};

export default GridItem;
