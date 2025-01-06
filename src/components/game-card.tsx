import Image from 'next/image'
import Hot from '@/assets/icons/hot.svg'
import New from '@/assets/icons/new.svg'

interface Props {
  tag?: string
  image: string
}

const GameCard: React.FC<Props> = ({ tag = '', image }) => {
  return (
    <div className="relative cursor-pointer">
      <div className="absolute top-[14px] -left-[3px] z-10">{tag === 'hot' ? <Hot /> : tag === 'new' && <New />}</div>
      <div className="relative rounded-lg overflow-hidden md:w-[156px] w-[120px] aspect-[3/4]">
        <Image src={image} alt="image game" width={156} height={500} className="object-cover w-full h-full" priority />
      </div>
    </div>
  )
}

export default GameCard
