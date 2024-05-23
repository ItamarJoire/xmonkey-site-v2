"use client";

import React from "react";
import { Input } from "@/components/aceternity/input";
import { cn } from "@/utils/cn";


import { toast } from 'react-toastify';
// const handleSubmit = (e: React.FormEvent<HTMLFormElement>)
export function SendForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('🐵 Mensagem enviada!', {
      position: "top-center",
      theme: "dark",
      icon: false
    
      });
  };

  return (
    <div className="mx-4">
      <div className="mt-20 max-w-md w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
        <h2 className="font-bold text-xl text-[#0E0E10]/80 lg:text-2xl">
          Vamos vender mais?
        </h2>
        <p className="text-[#0E0E10]/70 text-sm max-w-sm mt-2 lg:text-lg font-medium">
          Nos diga aqui algumas informações que nos ajudarão a ser assertivos quando entrarmos em contato com você.
        </p>

        <form action="https://api.staticforms.xyz/submit" method="post" className="my-8" onSubmit={handleSubmit}>
          <input type="hidden" name="accessKey" value="8450af1d-d840-41d1-821e-5bf7773686f5" />

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer className="mb-2 lg:mb-0">
              <Input id="firstname" name="$Nome" placeholder="Nome " type="text" required/>
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Input id="phone" name="$Telefone" placeholder="Telefone/WhatsApp" type="text" required/>
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Input id="email" name="$Email" placeholder="Melhor email" type="email" required/>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Input id="company" name="$Empresa" placeholder="Nome da empresa" type="text" required/>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <select name="$Faturamento" className="flex h-10 w-full font-normal border-none bg-gray-100 shadow-input rounded-md px-3 py-2 text-sm 
            text-neutral-400
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-300 
              disabled:cursor-not-allowed disabled:opacity-50
              dark:shadow-[0px_0px_1px_1px_var(--neutral-300)]
              group-hover/input:shadow-none transition duration-400" required>
              <option value="" selected disabled className="text-gray-50 hidden">Qual o faturamento mensal da sua empresa?</option>
              <option value="Até 50 mil" className="text-neutral-700">Até 50 mil</option>
              <option value="De 51 mil à 70 mil" className="text-neutral-700">De 51 mil à 70 mil</option>
              <option value="De 71 mil à 100 mil" className="text-neutral-700">De 71 mil à 100 mil</option>
              <option value="De 101 mil à 400 mil" className="text-neutral-700">De 101 mil à 400 mil</option>
              <option value="De 1 à 4 milhões" className="text-neutral-700">De 1 à 4 milhões</option>
            </select>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <select name="$Segmento" className="flex h-10 w-full font-normal border-none bg-gray-100 shadow-input rounded-md px-3 py-2 text-sm 
            text-neutral-400
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-300 
              disabled:cursor-not-allowed disabled:opacity-50
              dark:shadow-[0px_0px_1px_1px_var(--neutral-300)]
              group-hover/input:shadow-none transition duration-400" required>
              <option value="" selected disabled className="text-gray-50 hidden">Qual seu segmento?</option>
              <option value="Serviço" className="text-neutral-700">Serviço</option>
              <option value="Varejo" className="text-neutral-700">Varejo</option>
              <option value="Indústria" className="text-neutral-700">Indústria</option>
              <option value="E-commerce" className="text-neutral-700">E-commerce</option>
              <option value="Educação" className="text-neutral-700">Educação</option>
              <option value="Imobiliária" className="text-neutral-700">Imobiliária</option>
              <option value="SAAS" className="text-neutral-700">SAAS</option>
              <option value="Finanças" className="text-neutral-700">Finanças</option>
              <option value="Franquia / Franchising" className="text-neutral-700">Franquia</option>
              <option value="Telecom" className="text-neutral-700">Telecom</option>
              <option value="Hotelaria" className="text-neutral-700">Hotelaria</option>
              <option value="Restaurante" className="text-neutral-700">Restaurante</option>
              <option value="Energia solar" className="text-neutral-700">Energia solar</option>
              <option value="Turismo" className="text-neutral-700">Turismo</option>
              <option value="Outro" className="text-neutral-700">outro</option>
            </select>
          </LabelInputContainer>

          <LabelInputContainer className="mb-10 lg:mb-4">
            <select name="$Servico" className="flex h-10 w-full font-normal border-none bg-gray-100 shadow-input rounded-md px-3 py-2 text-sm 
            text-neutral-400
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-300 
              disabled:cursor-not-allowed disabled:opacity-50
              dark:shadow-[0px_0px_1px_1px_var(--neutral-300)]
              group-hover/input:shadow-none transition duration-400" required>
              <option value="" selected disabled className="text-gray-50 hidden">Qual tipo de serviço você deseja?</option>
              <option value="Tráfego pago" className="text-neutral-700">Gestão de tráfego pago</option>
              <option value="Design" className="text-neutral-700">Social media</option>
              <option value="Sites" className="text-neutral-700">Sites</option>
              <option value="Conhecer os planos" className="text-neutral-700">Conhecer os planos</option>
             
            </select>
          </LabelInputContainer>

            
          <input type="hidden" name="redirectTo" value="http://localhost:3000/" />
          <input
            className="text-lg bg-gradient-to-r relative group/btn from-primary-300 to-primary-100 w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:opacity-75 transition-opacity duration-200 hover:cursor-pointer"
            type="submit"
            value="Enviar"
         />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
