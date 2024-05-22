
import { useEffect } from "react";

import { useAppContext } from "@/hooks/useVideo";

export function VideoPlay(){
  const { isOpen, toggleOpen } = useAppContext()
 
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return(
    <div className="fixed inset-0 z-50 bg-black overflow-hidden" >
      <div className="flex flex-col">
       
        <video className=" w-full lg:w-[60vw] h-screen  rounded-xl overflow-hidden mx-auto" autoPlay>
          <source src="/video.mp4" className="rounded-xl"/>
        </video>

        <button onClick={() => toggleOpen()} className="text-white font-bold capitalize bg-gradient-to-r from-primary-300 to-primary-100 text-[14px] w-[316px] lg:text-[18px] lg:w-[486px] h-[50px] mx-auto rounded-lg absolute bottom-36 lg:bottom-8 left-[50%] transform -translate-x-1/2 -translate-y-1/2 hover:opacity-65 transition duration-300">
          Fechar vídeo
        </button>
      </div>
    </div>
  )
}