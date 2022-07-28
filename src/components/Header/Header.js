import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import banner from '../../../public/images/bannerF.png'

export default function Header() {
  return (
    <div  className="shadow-md vh70">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#1e293bd3]">
          <div className="flex justify-center h-full flex-col max-w-xl mx-auto px-4 py-10 md:py-0 sm:px-3 md:px-5 ">
            <div className="py-10 md:py-14 xl:py-28">
              <h2 className="text-white text-4xl lg:text-4xl xl:text-5xl font-bold mb-5"> Formação <br />Programador <span className="text-[#c21b78]"> Full Stack </span> </h2>
              <span className="text-base mt-3  xl:text-xl text-gray-100"> Seja audacioso, desafie a si mesmo e mude radicalmente para um mundo de tecnologias e inovações! </span>
              <span className="block text-gray-100 mt-6 xl:mt-10 text-base md:text-xl"> Inscrições aberta: </span>
              <span className="block text-white text-lg xl:text-2xl"> De 01/01/2022 a 05/02/2022 </span>

              <div className="flex mt-10">
                <Link href="/">
                  <a className="text-[#c21b78] font-bold rounded-lg shadow-xl bg-white px-10 xl:px-16 py-2 xl:py-3 text-base md:text-xl"> Inscrever </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="efect hidden md:block">
          <Image
            src={banner}
            layout="responsive"
            width={700}
            height={500}
            objectFit="cover"
          />  
        </div>
      </div>
    </div>
  )
}
