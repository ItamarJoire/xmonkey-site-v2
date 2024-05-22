"use client";

import { InfiniteMovingCards } from "@/components/aceternity/infiniteMovingCards";

import Img1 from "../../../public/people/venera.svg"
import Img2 from "../../../public/people/bruno-goncalves.svg"
import Img3 from "../../../public/people/vitor-gois.svg"
import Img4 from "../../../public/people/aline-tavares.svg"
import Img5 from "../../../public/people/nathalia.svg"
import Img6 from "../../../public/people/daisa.svg"
import Img7 from "../../../public/people/bruna-varela.svg"

export function Assessments() {
  return (
    <section>
      <h2 className="title-section-2 text-xl text-center">Não somos nós que estamos dizendo. <br />Dá uma conferida nas nossas avaliações:</h2>
      <div className="h-[25rem] rounded-md flex flex-col antialiased bg-black  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"

        />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Excelente agência, equipe super prestativa, capacitada e atenciosa. Sou cliente e estou muito satisfeita com todo o trabalho que tem sido feito pela agência nas minhas redes sociais.",
    name: "Venera Carvalho",
    title: "há 10 meses",
    img: Img1
  },
  {
    quote:
      "Tive uma ótima experiência com essa agência! Sempre com soluções inteligentes para o meu negócio. O tráfego pago bombando também. Sucesso para todos!",
    name: "Bruno Gonçalves",
    title: "há 10 meses",
    img: Img2
  },
  {
    quote:
      "Equipe dinâmica, atenciosa e super competente... ser cliente da X-Monkey está sendo uma experiência bacana, conseguem unir um excelente atendimento, muito profissionalismo e um alto astral lá nas nuvens...",
    name: "Vitor Gois",
    title: "há 11 meses",
    img: Img3
  },
  {
    quote:
      "Eu sou cliente desde a abertura da empresa e minha empresa cresceu muito depois desse acompanhamento do marketing digital. A equipe eh sempre muito solicita e atenciosa!",
    name: "Aline Tavares",
    title: "há 11 meses",
    img: Img4
  },
  {
    quote:
      "A agência tem muita responsabilidade com os clientes, se preocupa em acompanhar de perto cada processo e dar o apoio mais do que necessário.",
    name: "Nathália Alves",
    title: "há 11 meses",
    img: Img5
  },
  {
    quote:
      "A minha experiência foi a melhor possível! Os funcionários são super atenciosos, e estão sempre dispostos a ajudar o cliente.",
    name: "Daísa Moraes Moura",
    title: "há 11 meses",
    img: Img6
  },
  {
    quote:
      "Experiência incrível, recomendo demais! Pessoas muito competentes, obrigada pelo serviço 🤝🏽",
    name: "Bruna Varela",
    title: "há 10 meses",
    img: Img7
  },
 
];
