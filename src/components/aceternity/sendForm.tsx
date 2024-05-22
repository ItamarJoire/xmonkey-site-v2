"use client";
import React from "react";
import { Label } from "@/components/aceternity/label";
import { Input } from "@/components/aceternity/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SendForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="mx-4">
      <div className="mt-20 max-w-md w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
        <h2 className="font-bold text-xl text-[#0E0E10]/80">
          Vamos vender mais?
        </h2>
        <p className="text-[#0E0E10]/70 text-sm max-w-sm mt-2 ">
          Nos deixe uma mensagem que entraremos em contato.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-6">
            <Input id="firstname" placeholder="Nome completo" type="text" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-6">
            <Input id="lastname" placeholder="Telefone/WhatsApp" type="text" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-6">
            <Input id="email" placeholder="Melhor email" type="email" />
          </LabelInputContainer>

    

          <button
            className="text-lg bg-gradient-to-r relative group/btn from-primary-300 to-primary-100 w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:opacity-75 transition-opacity duration-200"
            type="submit"
          >
          Enviar 
            {/* <BottomGradient /> */}
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />
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
