import { MovingBorderDemo } from "../aceternity/movingBorderDemo";

export function Hero(){
  return(
    <main className="relative">
      <div className="mt-2 flex flex-col justify-center items-center ">
        <h1 className="typographyH1">Xmonkey</h1>
        <h2 className="uppercase text-sm text-white/90 tracking-widest font-light mt-2">Agência de marketing digital</h2>
        
        <div className="mt-4">
          <p className="typographyH3">Nossa meta é bater a sua. <br />Somos <span className="text-[#FF7205]">experts na arte de vendas</span>!</p>
        </div>

        <div className="mt-8 lg:mt-2">
          <MovingBorderDemo />
        </div>
      </div>

      <div className="effect-blur"></div>
    </main>
  )
}
