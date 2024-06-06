import { cn } from '@/lib/utils'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

type VehicleProps = {
  id: number
  model: string
  year: number
  price: number
  type: 'venda' | 'locação'
  pictures: {
    path: string | StaticImport
    description: string
    angle:
      | 'frente'
      | 'costas'
      | 'direito'
      | 'esquerdo'
      | 'superior'
      | 'inferior'
  }[]
  tags: string[]
}

type HeroProps = {
  img: string | StaticImport
  imgDescription: string
  headshot: string
}

type VehicleCardProps = HTMLAttributes<HTMLDivElement> & {
  darkTheme?: false
  vehicle: VehicleProps
  hero?: never
}

type HeroCardProps = HTMLAttributes<HTMLDivElement> & {
  darkTheme?: false
  hero: HeroProps
  vehicle?: never
}

export type CardProps = VehicleCardProps | HeroCardProps

const Card = ({ darkTheme, vehicle, hero }: CardProps) => {
  if (vehicle)
    return (
      <div
        className={cn(
          'flex h-[500px] w-[250px] flex-col gap-5 overflow-hidden',
          darkTheme === false ? 'text-black' : 'text-white',
        )}
      >
        <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-3xl">
          <Image
            src={vehicle.pictures[0].path}
            fill
            sizes="100%"
            className="h-auto w-full object-cover"
            alt={vehicle.pictures[0].description}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <span className="flex justify-between">
              <p className="font-bold">{vehicle.model}</p>
              <p
                className={cn(
                  'text-sm',
                  darkTheme ? 'font-extralight' : 'font-light',
                )}
              >
                {vehicle.type === 'venda' ? 'À venda' : 'Aluguel'}
              </p>
            </span>
            <p>{vehicle.year}</p>
          </div>
          <span className="flex justify-between">
            <p>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(vehicle.price)}
            </p>
            <button
              className={cn(
                'rounded-full  px-4 py-1 text-black',
                darkTheme === false
                  ? 'bg-black text-white'
                  : 'bg-white text-black',
              )}
            >
              {vehicle.type === 'venda' ? 'Comprar' : 'Alugar'}
            </button>
          </span>
        </div>
      </div>
    )

  if (hero)
    return (
      <div
        className={cn(
          'flex h-[500px] w-[250px] flex-col gap-2 overflow-hidden',
          darkTheme === false ? 'text-black' : 'text-white',
        )}
      >
        <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-3xl">
          <Image
            src={hero.img}
            fill
            sizes="100%"
            className="h-auto w-full object-cover"
            alt={hero.imgDescription}
          />
        </div>
        <p className="text-center font-light italic">{hero.headshot}</p>
      </div>
    )
}

export default Card
