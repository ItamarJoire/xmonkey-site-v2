'use client'

import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

const Container = styled.div`
  overflow: hidden;
  padding: 20px 0;
  white-space: nowrap;
  position: relative;

  margin: 20px 0 140px 0; 

  &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 161, 34, 0), #000);
  }

  &::after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 214, 5, 0), #0000);
  }
`;

const Slide = styled.div`
  display: flex;
  animation: ${slideAnimation} 12s infinite linear; 

  @media (min-width: 768px) {  // Ajuste este valor conforme necessário para o seu breakpoint móvel
    animation: ${slideAnimation} 40s infinite linear; 
  }
`;

const Item = styled.div`
  height: 20px;
  margin: 0 20px;
`;

import { ImgBrands } from "@/lib"
import Image from 'next/image';

export function Brands(){;
  return(
    <div className=''>
      <h2 className='text-white/90 mx-4 lg:ml-72 uppercase text-[11px] lg:text-[12px] -tracking-tighter'>Mais de 1 mil clientes cresceram com a gente</h2>
      <Container className="logos bg-[#1C1D1F]/20 ">
       
        <Slide className="logos-slide font-['Lufga'] text-white font-extrabold tracking-widest">
          {
            ImgBrands.map((item, index) => (
             <Image src={item.src} alt='' width={60} height={60} className='ml-24'/>
            ))
          }
           
        </Slide>
      </Container>
      </div>
  )
}