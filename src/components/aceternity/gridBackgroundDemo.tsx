import React, { ReactNode } from "react";
interface GridBackgroundDemoProps{
  children: ReactNode;
}

export function GridBackgroundDemo({children}: GridBackgroundDemoProps) {
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-grid-white/[0.06] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {children}
      </p>
    </div>
  );
}