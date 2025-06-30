'use client'

import { CarouselTestimonials } from '@/components/ui/carouselTestimonials'

export function Testimonials() {
  return (
    <section className=" pb-24 lg:pt-16">
      <div className="mx-4 md:mx-24 lg:grid lg:grid-cols-2 lg:mx-40 2xl:mx-[450px]">
        <div>
          <h1 className="title-section">
            Relatos de quem já <br />
            contratou a <span className="text-gradient">SparkVibe</span>
          </h1>
          <p className="mt-4 text-base text-gray-400 sm:text-lg text-left md:text-left max-w-[507px]">
            Ter o reconhecimento de nossos clientes é extremamente satisfatório, e esse é o{' '}
            <span className="text-title">nosso maior objetivo</span>. Trabalhamos, estudamos, pensando e estruturamos
            diariamente para trazer resultados consideráveis para cada empresa que deposita confiança na SparkVibe.
          </p>
          <p className="body-section">
            A nossa missão é cumprida quando recebemos depoimentos emocionantes de nossos clientes. Somos muito gratos
            por toda parceria e por confiarem em nosso trabalho.
          </p>
        </div>

        <div>
          <div className="">
            <CarouselTestimonials />
          </div>
        </div>
      </div>
    </section>
  )
}
