import { MovingBorderDemo } from "../aceternity/movingBorderDemo";
import { SendForm } from "@/components/aceternity/sendForm";
import { Presentation } from "./presentation";

export function Hero(){
  return(
    <main className="mt-[1000px] md:mt-[1400px] lg:mt-[1100px]">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-24">
        <div className="mt-2 flex flex-col lg:mt-8 ">
          <h1 className="typographyH1">Xmonkey</h1>
          <h2 className="uppercase text-sm text-white/90 tracking-widest font-medium mt-1 lg:mt-4 lg:text-lg">Marketing de resultado</h2>
          
          <div className="mt-4">
            <p className="typographyH2">Nossa meta é bater a sua. <br />Somos <span className="text-gradient font-bold">experts na arte de vendas</span>!</p>
            <p className="typographyH3 mt-4">Implementamos estratégias eficazes <br />que impulsionam suas vendas e <br />maximizam seu retorno sobre o investimento.</p>
          </div>
        </div>
      
      
        <div>
          <SendForm />
        </div>

        

      </div>

      <div className="pt-12 lg:pt-16">
        <Presentation />
      </div>
    
      <div className="effect-blur"></div>
      <div className="effect-blur-2"></div>
    </main>
  )
}
