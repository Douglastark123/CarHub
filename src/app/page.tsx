'use client'

import Card from '@/components/Card'
import data from './data'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mercedes, setMercedes] = useState(null)

  useEffect(() => {
    setMercedes(data[data.length - 1])
  }, [])

  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-center bg-black py-5 text-white">
        <div className="w-4/5 max-w-screen-lg">
          <h2 className="font-serif text-2xl font-bold">CarHub</h2>
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <section className="flex items-center justify-center bg-black text-white">
          <div className="flex w-4/5 max-w-screen-lg items-center justify-between gap-20 py-20">
            {/* Hero Text */}
            <div className="flex w-1/2 flex-col gap-20">
              <div className="flex flex-col gap-10">
                <h1 className="text-3xl">
                  Explore, encontre e alugue ou compre o carro do seus sonhos
                </h1>
                <h3>Concessionária com mais de 1.000 veículos e 150 marcas</h3>
                <a
                  className="w-full rounded-full bg-green-600 px-5 py-3 text-center"
                  href="/veiculos"
                >
                  Encontre o seu veículo
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-1">
                <div className="pr-8">
                  <h4 className="text-3xl">1.000+</h4>
                  <p>Veiculos</p>
                </div>
                <div className="border-l border-l-stone-800 px-8">
                  <h4 className="text-3xl">150+</h4>
                  <p>Marcas</p>
                </div>
                <div className="border-l border-l-stone-800 px-8">
                  <h4 className="text-3xl">10.000+</h4>
                  <p>Clientes</p>
                </div>
              </div>
            </div>

            {/* Hero Card */}
            <Card
              hero={{
                img: '/hero.jpg',
                imgDescription: 'Mulher sentada em veículo',
                headshot: 'Pra impressionar a gata',
              }}
            />
          </div>
        </section>
        <section className="flex items-center justify-center">
          <div className="flex w-4/5 max-w-screen-lg justify-between gap-20 py-10">
            <h2 className="absolute right-20 z-10 h-fit rounded-3xl bg-green-500 px-5 py-1 font-mono font-semibold text-white">
              Em Destaque
            </h2>
            <Card darkTheme={false} vehicle={mercedes} />
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center bg-black text-white">
        © CarHub 2024
      </footer>
    </>
  )
}
