import Image from "next/image"

import IconCheck from "/public/check.svg"

import ImgAward1 from "/public/award-1.svg"
import Link from "next/link"

export function Differences(){
  return(
    <section className="bg-[#1C1D1F]/40">
      <h2 className="text-center py-16 lg:py-28 title-section-2">Alguns diferenciais da Xmonkey</h2>
      <div className=" relative mx-3 space-y-6 lg:space-y-0 lg:flex pt-2 pb-20  lg:pt-8 lg:pb-28">
        <div className="lg:mx-64">
          <div className="bg-gradient-to-r from-primary-300 to-primary-100 lg:min-w-[730px] rounded-lg px-10 py-20 lg:px-16 lg:py-36">
            <div>
              <div>
                <h1 className="text-white text-center text-4xl lg:text-8xl font-bold">+ de 1000</h1>
                <h2 className="text-white text-center text-base lg:text-3xl font-medium">Projetos entregues</h2>
              </div>

              <div className="flex justify-around mt-8">
                <div>
                  <h3 className="text-white text-base lg:text-3xl">19 <br /> anos</h3>
                </div>
                <div>
                  <h3 className="text-white text-base lg:text-3xl">19 <br /> anos</h3>
                </div>
                <div>
                  <h3 className="text-white text-base lg:text-3xl">19 <br /> anos</h3>
                </div>
                
                
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:absolute lg:top-[90px]  bg-white shadow-2xl max-w-[830px] rounded-lg p-10 lg:ml-[660px] ">
            <div>
              <div>
                <h1 className="text-gradient text-left text-4xl lg:text-7xl font-extrabold">Marketing de resultato</h1>

              </div>

              <div className="flex justify-around mt-8">
                <p className="text-gray-500">A Xmonkey está situada em Salvador e possui inúmeras franquias espalhadas pelo Brasil.  (FALAR SOBRE E TAMBÉM DOS PRÊMIOS QUE JÁ REBEBEU )</p>
              </div>
                
              <div className="mt-6">
                <div className="flex gap-3">
                  <Image src={IconCheck} alt="" className="w-6"/>
                  <h3 className="text-gray-500">Finalista por 5 anos consecutivos RD Summit</h3>
                </div>
                <div className="flex gap-3">
                  <Image src={IconCheck} alt="" className="w-6"/>
                  <h3 className="text-gray-500">Finalista por 5 anos consecutivos RD Summit</h3>
                </div>
                <div className="flex gap-3">
                  <Image src={IconCheck} alt="" className="w-6"/>
                  <h3 className="text-gray-500">Finalista por 5 anos consecutivos RD Summit</h3>
                </div>
                <div className="flex gap-3">
                  <Image src={IconCheck} alt="" className="w-6"/>
                  <h3 className="text-gray-500">Finalista por 5 anos consecutivos RD Summit</h3>
                </div>
              </div>

              <div className="mt-6">
                <Image src={ImgAward1} alt="" className="w-24"/>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <Link href="#form" className="">   
          <div className="mx-4 lg:mx-auto lg:mt-12 text-center rounded-lg pb-20" >
              <a href="#" title="" className="inline-flex mx-auto w-full text-center lg:w-[300px]  lg:ml-8 rounded-lg items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-primary-300 to-primary-100 hover:opacity-65" role="button">Quero vender mais</a>  
          </div>
        </Link> 
    </section>
  )
}