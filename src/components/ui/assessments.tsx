"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/aceternity/infiniteMovingCards";

import LogoXmonkey from "/public/logo.svg"

export function Assessments() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"

      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Excelente agência, equipe super prestativa, capacitada e atenciosa. Sou cliente e estou muito satisfeita com todo o trabalho que tem sido feito pela agência nas minhas redes sociais.",
    name: "Venera Carvalho",
    title: "há 10 meses",
    img: LogoXmonkey
  },
  // {
  //   quote:
  //     "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  //   name: "William Shakespeare",
  //   title: "Hamlet",
  // },
  // {
  //   quote: "All that we see or seem is but a dream within a dream.",
  //   name: "Edgar Allan Poe",
  //   title: "A Dream Within a Dream",
  // },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];
