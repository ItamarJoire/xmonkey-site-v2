"use client"

import Image from "next/image"

import { useState } from "react"

import { AlignRight, X } from 'lucide-react'

import LogoXmonkey from '/public/logo.svg'

export function Header(){
  const [ open, setOpen ] = useState(false)

  return(
    <nav className="mt-4 border-[1px] border-white/10 bg-[#171719] h-16 w-[80%] mx-auto rounded-[40px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-evenly lg:justify-between mx-auto ">
        <a href="/" className="pl-4 pt-3 flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={LogoXmonkey} alt="" className="w-10"/>
        </a>
      
        <div onClick={()=>setOpen(!open)} className='inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:cursor-pointer'>
          { open ? <AlignRight color="#fff" className="size-8 mt-2"/> : <X color="#fff" className="size-8 mt-2"/> }
        </div>
     
        <div className={`${open ? 'top-[84px]' : 'top-[-148px]'} absolute transition-all z-10 md:z-10 md:pr-4 duration-200 ease-in w-[80%] md:static  md:block md:w-auto`} id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 bg-gray-100 md:space-x-8 rounded-b-[40px] rtl:space-x-reverse md:flex-row md:mt-3 md:border-0 md:bg-transparent">
          
        
            <li onClick={() => setOpen(!open)} className="bg-gradient-to-r from-[#FF7205] to-[#FFA122] px-3 py-2 rounded-lg">
              <a href="#" className="text-sm font-semibold block pt-4 pb-6 px-4 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:duration-150">Portfólio</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}