import Image from 'next/image'

interface Props {
  name: string
  numberOfGames: number
  image: string
}

const ProviderCard: React.FC<Props> = ({ name, numberOfGames, image }) => {
  return (
    <div className="md:w-[156px] w-[120px]">
      <div className="h-[54px] md:w-[156px] w-[120px] bg-primary-2 flex items-center justify-center px-3 rounded-t-lg">
        <div className="relative overflow-hidden h-[30px]">
          <Image
            src={image}
            alt="image provider"
            width={93}
            height={30}
            className="object-cover w-full h-full cursor-pointer"
            priority
          />
        </div>
      </div>
      <div className="h-[54px] bg-grey flex flex-col items-center justify-center px-3 rounded-b-lg space-y-1">
        <span className="text-sm underline">{name}</span>
        <span className="text-xs">{numberOfGames} games</span>
      </div>
    </div>
  )
}

export default ProviderCard
