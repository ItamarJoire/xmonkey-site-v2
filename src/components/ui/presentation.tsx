"use client"

import Image from "next/image"
import ImgMockup from "/public/video-image.svg"
import ImgPlay from "/public/play.svg"
import { useAppContext } from "@/hooks/useVideo"
import { VideoPlay } from "./videoPlay"

export function Presentation(){
  const {  isOpen, toggleOpen } = useAppContext()

  return(
    <section className="relative w-[90%] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden">
      <Image src={ImgMockup} alt=""/>
      
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <button onClick={() => toggleOpen()} className="bg-white p-7 rounded-full shadow-custom-shadow  hover:shadow-custom-shadow-hover transition duration-300 hover:cursor-pointer">
            <Image src={ImgPlay} alt="" className="ml-1 w-6 spanHoverEffect"/>
          </button>
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

        { isOpen && <VideoPlay />}
    </section>
  )
}

