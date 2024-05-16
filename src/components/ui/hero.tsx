import { MovingBorderDemo } from "../aceternity/movingBorderDemo";

export function Hero(){
  return(
    <main className="">
      <div className="mt-2 flex flex-col justify-center items-center lg:mt-8">
        <h1 className="typographyH1">Xmonkey</h1>
        <h2 className="uppercase text-sm text-white/90 tracking-widest font-light mt-1 lg:mt-6 lg:text-lg">Marketing de resultado</h2>
        
        <div className="mt-4">
          <p className="typographyH3">Nossa meta é bater a sua. <br />Somos <span className="text-[#FF7205]">experts na arte de vendas</span>!</p>
        </div>

        {/* <div className="mt-8 lg:mt-2">
          <MovingBorderDemo />
        </div> */}

        {/* <div className="w-full mx-auto mt-8 hover:opacity-65 transition duration-300">
          <button className="text-white capitalize bg-gradient-to-r from-primary-300 to-primary-100 text-[14px] w-[316px] lg:text-[18px] lg:w-[486px] h-[50px] mx-auto rounded-lg">
            Quero vender mais
          </button>
        </div> */}
      </div>

      <div className="mx-auto mt-10 sm:flex sm:items-center sm:space-x-8 text-center rounded-lg">
        <a href="#" title="" className="inline-flex mx-auto w-full text-center  rounded-lg items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-primary-300 to-primary-100" role="button">Quero vender mais</a>  
      </div>

      <div className="effect-blur"></div>
      <div className="effect-blur-2"></div>
    </main>
  )
}
