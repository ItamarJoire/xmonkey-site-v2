"use client";
import React from "react";
import { Button } from "@/components/aceternity/movingBorder";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="12px"
        className="bg-slate-900/20 text-white border-slate-800/20 font-bold tracking-wide text-sm lg:text-base"
      >
        Quero vender mais
      </Button>
    </div>
  );
}
