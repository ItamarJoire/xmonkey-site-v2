"use client"

import Image from "next/image"

import { useState } from "react"

import { AlignRight, X } from 'lucide-react'

import LogoXmonkey from '/public/logo.svg'

export function Header(){
  const [ open, setOpen ] = useState(false)

  return(
    <nav className="mt-4 border-[1px] border-white/5 bg-[#171719] h-16 w-[80%] mx-auto rounded-[40px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-evenly lg:justify-between mx-auto ">
        <a href="/" className="pl-4 pt-2 flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={LogoXmonkey} alt="" className="w-9"/>
        </a>
      
        <div onClick={()=>setOpen(!open)} className='inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:cursor-pointer'>
          { open ?  <X color="#fff" className="size-6 mt-3 mr-3"/>  : <AlignRight color="#fff" className="size-6 mt-3 mr-3"/>}
        </div>
     
        <div className={`${open ? 'top-[74px]' : 'top-[-148px]'} absolute transition-all z-10 md:z-10 md:pr-4 duration-400 ease-in w-[80%] md:static  md:block md:w-auto text-center`} id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4  md:space-x-8 rounded-b-[40px] rtl:space-x-reverse md:flex-row md:mt-3 md:border-0 md:bg-transparent">
          
        
            <li onClick={() => setOpen(!open)} className="bg-[#171719] px-3 py-2 rounded-lg">
              <a href="#" className="text-sm font-semibold block pt-4 pb-6 px-4 md:p-0 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:duration-150">Portfólio</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}