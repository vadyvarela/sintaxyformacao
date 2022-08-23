import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <Head>
        <title> Sintaxy Academy </title>
        <meta name="description" content="Sintaxy Formação - Projeto Kode Verde" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="dark:bg-slate-800 max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 h-screen">
          <h2 className="flex justify-center items-center text-lg md:text-4xl">
            <Link href="https://academia.sintaxy.com/">
              <a className="text-center mt-10 ">Aceda aqui: <br /><br /> <p className="underline"> https://academia.sintaxy.com/ </p>  </a>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}
