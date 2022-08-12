import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Title from '../components/Title'
import Card from '../components/Header/Card'
import Smile from '../../public/images/smile.png'
import why from '../../public/images/why.png'

import iefp from '../../public/images/iefp.svg'
import cvd from '../../public/images/cvdigital.svg'
import kodeverde from '../../public/images/codeVerde.svg'

import faq from '../services/faq.json'
import Accordion from '../components/Accordion/Accordion'

import {useTheme} from 'next-themes'

export default function Home() {

  return (
    <div>
      <Head>
        <title> Sintaxy Academy </title>
        <meta name="description" content="Sintaxy Formação - Projeto Kode Verde" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        
        <Header />
        <div className="bg-white dark:bg-slate-800 relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
          <Title title="O que irás aprender" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card 
              title="Introdução à Computação na Nuvem"
              desc="O módulo apresenta os conceitos centrais da computação em nuvem. Adquirindo  os conhecimentos fundamentais necessários para compreender a computação em nuvem de uma..."
              duration="3 Horas"
              teacher="Vadnir Vieira"
              number="1"
            />
            <Card 
              title="Introdução ao Desenvolvimento de Web com HTML, CSS, Java Script"
              desc="O módulo apresenta os conceitos centrais da computação em nuvem. Adquirindo  os conhecimentos fundamentais necessários para compreender a computação em nuvem de uma..."
              duration="3 Horas"
              teacher="Vadnir Vieira"
              number="2"
            />
            <Card 
              title="Introdução ao Git e GitHub"
              desc="O módulo apresenta os conceitos centrais da computação em nuvem. Adquirindo  os conhecimentos fundamentais necessários para compreender a computação em nuvem de uma..."
              duration="3 Horas"
              teacher="Vadnir Vieira"
              number="3"
            />
            <Card 
              title="Desenvolvimento de Aplicações Cloud com Node.js e React"
              desc="O módulo apresenta os conceitos centrais da computação em nuvem. Adquirindo  os conhecimentos fundamentais necessários para compreender a computação em nuvem de uma..."
              duration="3 Horas"
              teacher="Vadnir Vieira"
              number="4"
            />
            <Card 
              title="Desenvolvimento de Aplicações Nativas para a Cloud "
              desc="O módulo apresenta os conceitos centrais da computação em nuvem. Adquirindo  os conhecimentos fundamentais necessários para compreender a computação em nuvem de uma..."
              duration="3 Horas"
              teacher="Vadnir Vieira"
              number="5"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
          <div className="py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="py-10 flex flex-col justify-center h-full">
                <h2 className="font-bold dark:text-gray-50  text-[#223150] text-3xl mb-5"> O que é <br />
                  Programador <span className="text-[#c21b78]"> Full Stack </span>
                </h2>
                
                <p className="text-[#212529] dark:text-gray-100 text-justify text-base"> O Programador Full Stack é um profissional multifuncional habilitado para compreender e operar em todas as camadas do desenvolvimento de um projeto de software, desde a criação de servidores internos (back-end) até interfaces de comunicação com o utilizador final (front-end).</p>
                <div className="mt-2 border-t border-slate-700"></div>
                <h2 className="mt-5 font-bold dark:text-gray-50 text-[#223150] text-3xl mb-5"> Por quê <br />
                  Programador <span className="text-[#c21b78]"> Full Stack </span>
                </h2>
                <p className="dark:text-gray-100 text-[#212529] text-justify text-base"> Programador Full Stack foi concebido para dotar os formandos de conhecimentos técnicos no desenvolvimento de aplicações orientadas para a nuvem, perfil este muito requisitado atualmente no mercado. </p>
              
              </div>
              <div>
                <Image
                alt="Sintaxy"
                  src={Smile}
                  layout="responsive"
                  width={700}
                  height={450}
                  objectFit="contain"
                /> 
              </div>
            </div>
          </div>
        </div>
      
        <div className="bg-[#fcfafb] dark:bg-slate-700">
          <div className="flex">
            <div className="hidden md:block w-2/5">
              <div>
                <Image
                alt="Sintaxy"
                  src={why} 
                  layout="responsive"
                  width={700}
                  height={570}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <div className="h-full flex flex-col justify-between p-4 md:p-24">
                <h2 className="font-bold dark:text-gray-50 text-[#223150] text-3xl mb-5"> Parceiros</h2>
                
                <div className="border-t-2 border-b-2 py-10 border-gray-300">
                <div className="grid grid-cols-3 gap-10">
                  <div>
                  <Image
                    alt="Cabo Verde Digital"
                    src={cvd}
                    layout="responsive"
                    width={100}
                    height={20}
                    objectFit="contain"
                  /> 
                  </div>
                  <div>
                  <Image
                    alt="IEFP"
                    src={iefp}
                    layout="responsive"
                    width={100}
                    height={20}
                    objectFit="contain"
                  /> 
                  </div>
                  <div>
                  <Image
                    alt="Kode Verde"
                    src={kodeverde}
                    layout="responsive"
                    width={100}
                    height={20}
                    objectFit="contain"
                  /> 
                  </div>
                </div>
                </div> 
              </div>
             
            </div>
          </div>
        </div>
      
        {/* <div className="bg-white dark:bg-slate-800 relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
          <Title title="Parceiros" />
        </div> */}

        <div className="bg-white dark:bg-slate-800 relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
          <div className="pt-8">
            <Title title="Perguntas Frequentes" />
            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {faq.map((faqs, index) => (
                <Accordion key={index} index={index} title={faqs.title} desc={faqs.desc} />
              ))}
            </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 pt-10 border-t border-gray-700 dark:bg-slate-800  bg-gray-100 py-5">
          <div className="text-center text-md md:text-base relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
            <span className="dark:text-gray-100 text-center"> &copy; 2022 <a className="text-[#C21B78]" rel="noreferrer" href="https://sintaxy.com/" target="_blank"> Sintaxy </a> Todos os direitos reservados. </span>
          </div>
        </footer>

      </div>
    </div>
  )
}
