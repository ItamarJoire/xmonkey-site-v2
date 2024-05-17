'use client'

import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  overflow: hidden;
  padding: 40px 0;
  white-space: nowrap;
  position: relative;

  margin: 24px 0 140px 0; 

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
    background: linear-gradient(to left, rgba(255, 161, 34, 0), #FFA122);
  }

  &::after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 214, 5, 0), #FF7205);
  }
`;

const Slide = styled.div`
  display: flex;
  animation: ${slideAnimation} 10s infinite linear; 
`;

const Item = styled.div`
  height: 20px;
  margin: 0 20px;
`;

import { ImgBrands } from "@/lib"
import Image from 'next/image';

export function Brands(){;
  return(
    <div>
      <h2 className='text-white ml-72 uppercase text-base'>MAIS DE 20 MIL USUÁRIOS SE INSCREVERAM PARA CRESCER DE ACORDO COM SEUS TERMOS</h2>
      <Container className="logos bg-gradient-to-r from-primary-300 to-primary-100 ">
       
        <Slide className="logos-slide font-['Lufga'] text-white font-extrabold tracking-widest">
          {
            ImgBrands.map((item) => (
              <Item><img src={item.src} alt='' className='w-full'/></Item>
            ))
          }
           
        </Slide>
      </Container>
      </div>
  )
}