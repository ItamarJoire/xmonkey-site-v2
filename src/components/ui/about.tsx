import Image from 'next/image'

import ImgSocios from '/public/socios.png'

export function About() {
  return (
    <div className="bg-black">
      <section className="py-10 sm:py-16 lg:py-28">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="title-section text-center md:text-left">
                Quem
                <br />
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 h-5 lg:h-8 bg-gradient-to-r from-primary-300 to-primary-100 rounded-sm"></span>
                  <h1 className="relative text-3xl font-bold text-white sm:text-5xl lg:text-6xl">somos</h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-gray-400 sm:text-lg text-center md:text-left">
                A SparkVibe nasceu da necessidade de empresas se destacarem em um mundo digital em constante evolução.
                Somos o resultado de uma trajetória sólida, com mais de 10 anos de experiência em estratégias de
                marketing digital, gestão de redes sociais e engajamento com o público. Nossa missão é impulsionar
                marcas com criatividade e inovação, conectando-as aos seus clientes de forma autêntica e impactante.
              </p>
              <p className="mt-8 text-base text-gray-400 sm:text-lg text-center md:text-left">
                Nossa equipe é composta por profissionais apaixonados e especializados em diversas áreas do marketing,
                desde a criação de conteúdo até a análise de dados e campanhas publicitárias. Combinamos expertise
                técnica com uma visão estratégica, garantindo que cada projeto seja personalizado para atender às
                necessidades específicas de nossos clientes, sempre com foco em resultados mensuráveis.
              </p>
            </div>

            <div className="[mask:linear-gradient(black,black_75%,transparent)]">
              <Image className="w-full lg:max-w-[500px]" src={ImgSocios} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
