import { MovingBorderDemo } from "../aceternity/movingBorderDemo";

export function Hero(){
  return(
    <main className="">
      <div className="mt-2 flex flex-col justify-center items-center lg:mt-8">
        <h1 className="typographyH1">Xmonkey</h1>
        <h2 className="uppercase text-sm text-white/90 tracking-widest font-light mt-1 lg:mt-6 lg:text-lg">Marketing de resultado</h2>
        
        <div className="mt-4">
          <p className="typographyH3">Nossa meta é bater a sua. <br />Somos <span className="text-gradient">experts na arte de vendas</span>!</p>
        </div>

        <div className="mt-8 lg:mt-8 ">
          <MovingBorderDemo />
        </div>
      </div>

      <div className="effect-blur"></div>
      <div className="effect-blur-2"></div>
    </main>
  )
}
