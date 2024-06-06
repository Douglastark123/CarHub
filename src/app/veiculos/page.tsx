'use client'

import Card from '@/components/Card'
import { useEffect, useState } from 'react'
import data from '../data'

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
        <section className="flex flex-1 items-center justify-center bg-black text-white">
          <div className="flex w-4/5 max-w-screen-lg justify-between gap-20 py-16">
            {/* Vehicle List */}
            <Card vehicle={mercedes} />
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center bg-black text-white">
        © CarHub 2024
      </footer>
    </>
  )
}
