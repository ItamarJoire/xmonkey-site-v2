import Image from 'next/image'

import IconArrowRounded from '/public/arrow-rounded.svg'

import ImgInvestimentCard from "/public/investiment-card-3.svg" 

import { Link } from "react-scroll";

export function WhyMarketing(){
  return(
    <div className="bg-black">

    <section className="py-10 sm:py-16 lg:py-24 mt-[900px] lg:mt-[1000px]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="title-section text-center md:text-left">
                        Porque investir em
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 h-5 lg:h-8 bg-gradient-to-r from-primary-300 to-primary-100 rounded-sm"></span>
                            <h1 className="relative text-3xl font-bold text-white sm:text-5xl lg:text-6xl">Marketing?</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-gray-400 sm:text-lg text-center md:text-left">Empresas que investem no digital são encontradas com mais facilidade pelo público alvo.</p>
                    
                    <div className=''>
              <div className='flex items-start mt-8'>
                  <Image src={IconArrowRounded} alt="" className='mr-3'/>
                  <p className='text-base text-gray-400 sm:text-lg text-left md:text-left max-w-[507px]'>A criação de <span className='text-gray-300'>páginas nas redes sociais </span>e <span className='text-gray-300'>anúncios</span> em ferramentas como <span className='text-gray-300'>Facebook Ads</span> e <span className='text-gray-300'>Google Ads</span>, são ótimas formas de aumentar o alcance da sua marca.</p>
              </div>
              <div className='flex items-start mt-8'>
                  <Image src={IconArrowRounded} alt="" className='mr-3'/>
                  <p className='text-base text-gray-400 sm:text-lg text-left md:text-left max-w-[507px]'>Com o <span className='text-gray-300'>aumento da visibilidade</span>, seu produto ou serviço será visto com maior frequência pelos potenciais clientes. Dessa forma, é possível <span className='text-gray-300'>aumentar as vendas das empresa</span>, fazendo ela crescer exponencialmente.</p>
              </div>
              <div className='flex items-start mt-8'>
                  <Image src={IconArrowRounded} alt="" className='mr-3'/>
                  <p className='text-base text-gray-400 sm:text-lg text-left md:text-left max-w-[507px]'>Além disso, você consegue acompanhar os resultados das estratégias do <span className='text-gray-300'>marketing digital</span> em tempo real. Deste modo, é possível analisar e ajustar as campanhas para que os resultados <span className='text-gray-300'>sejam cada vez melhores</span>.</p>
              </div>
            </div>

            <Link to="form" spy={true} smooth={true} offset={0} duration={500}>   
                <div className="mx-auto mt-10 sm:flex sm:items-center sm:space-x-8 text-center lg:mx-0 lg:text-left rounded-lg">
                    <a href="#" title="" className="inline-flex mx-auto w-full text-center lg:w-[300px] lg:text-left lg:mx-0 lg:ml-8 rounded-lg items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-primary-300 to-primary-100 hover:opacity-65" role="button">Quero vender mais</a>  
                </div>
            </Link> 
            
                </div>

                <div>
                    <Image className="w-full" src={ImgInvestimentCard} alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

  )
}