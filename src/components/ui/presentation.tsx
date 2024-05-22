"use client"

import Image from "next/image"
import ImgMockup from "/public/video-image-2.svg"
import ImgPlay from "/public/play.svg"

import { useAppContext } from "@/hooks/useVideo"


export function Presentation(){
  const { toggleOpen } = useAppContext()

  return(
    <section className="relative w-[98%] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden">
      <Image src={ImgMockup} alt=""/>
      
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-center ">
          <button onClick={() => toggleOpen()} className="bg-[#1C1D1F] p-4 md:p-7 rounded-full shadow-custom-shadow  hover:shadow-custom-shadow-hover transition duration-300 hover:cursor-pointer">
          
            <Image src={ImgPlay} alt="" className="ml-1 w-4 md:w-6 spanHoverEffect"/>
            
          </button>
          
          <h2 className="text-white/60 text-sm lg:text-xl text-center mx-auto mt-4 ">Aperte o <span className="text-gradient">play</span> para assistir</h2>
          </div>
      </div>

      <style>
          {`
            button:hover .spanHoverEffect
            {
              transition: 300ms;
              scale: 110%;
            }
          `}
      </style>
    </section>
  )
}

