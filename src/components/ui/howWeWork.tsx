import { Link } from "react-scroll";

export function HowWeWork(){
  return(
    <section className="py-10 sm:py-16 lg:py-24 ">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="title-section text-">Como <span className="text-gradient">trabalhamos</span></h2>
            <p className="max-w-lg mx-auto mt-4 text-base sm:text-lg leading-relaxed text-gray-400">Nossa equipe é composta por especialistas apaixonados e experientes em diversas áreas do marketing digital, incluindo SEO, SEM, mídias sociais, conteúdo e análise de dados. Utilizamos ferramentas avançadas e as melhores práticas da indústria para implementar campanhas eficazes e alcançar resultados mensuráveis.</p>
        </div>

        <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-t from-primary-300 to-primary-100  rounded-full shadow">
                        <span className="text-xl font-semibold text-white"> 1 </span>
                    </div>
                    <h3 className="mt-6 text-xl sm:text-2xl font-semibold leading-tight text-white md:mt-10">Entendimento Profundo do Cliente e Objetivos</h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-400">O primeiro passo fundamental no nosso processo de trabalho é realizar uma análise detalhada das necessidades, desafios e objetivos específicos de cada cliente. Realizamos entrevistas e pesquisas para compreender sua visão de negócio, público-alvo, concorrência e metas de curto e longo prazo. Este entendimento é a base para desenvolver estratégias personalizadas e eficazes.</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-t from-primary-300 to-primary-100 rounded-full shadow">
                        <span className="text-xl font-semibold text-white"> 2 </span>
                    </div>
                    <h3 className="mt-6 text-xl sm:text-2xl font-semibold leading-tight text-white md:mt-10">Desenvolvimento de Estratégias Personalizadas</h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-400">Com base no conhecimento adquirido, nossa equipe especializada desenvolve estratégias de marketing digital personalizadas para cada cliente. Isso inclui a identificação das melhores práticas e táticas adequadas, como SEO (otimização para mecanismos de busca), PPC (pay-per-click), marketing de conteúdo, mídias sociais, e-mail marketing, entre outras. Nosso objetivo é criar campanhas integradas que maximizem o alcance, engajamento e conversão.</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-t from-primary-300 to-primary-100 rounded-full shadow">
                        <span className="text-xl font-semibold text-white"> 3 </span>
                    </div>
                    <h3 className="mt-6 text-xl sm:text-2xl font-semibold leading-tight text-white md:mt-10">Implementação e Otimização Contínua</h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-400">Uma vez que as estratégias são planejadas e aprovadas pelo cliente, procedemos com a implementação meticulosa das campanhas. Monitoramos de perto o desempenho em tempo real, utilizando ferramentas analíticas avançadas para medir métricas-chave e identificar oportunidades de melhoria. A otimização contínua é essencial: ajustamos as estratégias com base nos dados coletados para garantir resultados consistentes e um ROI (retorno sobre investimento) positivo para nossos clientes.</p>
                </div>

                
            </div>
        </div>

        <Link to="form" spy={true} smooth={true} offset={0} duration={500}>   
            <div className="mx-auto mt-10 sm:items-center sm:space-x-8 text-center  rounded-lg">
                <a href="#" title="" className="inline-flex mx-auto w-full text-center lg:w-[300px]  lg:ml-8 rounded-lg items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-primary-300 to-primary-100 hover:opacity-65" role="button">Quero vender mais</a>  
            </div>
        </Link> 
    </div>
</section>

  )
}