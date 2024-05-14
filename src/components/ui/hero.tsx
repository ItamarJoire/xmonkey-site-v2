import Image from "next/image"

import LogoXmonkey from "/public/logo.svg"

export function Hero(){
  return(
    <main className="relative">
      <div className="mt-12 flex flex-col justify-center items-center ">
       {/* <Image 
          src={LogoXmonkey} 
          alt="Logo Xmonkey" 
          className="w-[150px] h-[160px] md:w-[120px] md:h-[110px]"
        /> */}

        <h1 className="typographyH1">Xmonkey</h1>
        <h2 className="uppercase text-sm text-white/90 tracking-widest font-light mt-1">Agêncida de marketing digital</h2>
        
        <div className="mt-4">
          <p className="typographyH3">Nossa meta é bater a sua.</p>
          <p className="typographyH3">Somos <span className="text-[#FF7205]">experts na arte de vendas</span>!</p>
        </div>
      </div>

      <div className="effect-blur"></div>
    </main>
  )
}
