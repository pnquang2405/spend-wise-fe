import MenuItem from '@/components/menu-item'
import { RiSearchLine } from 'react-icons/ri'
import Diamond from '@/assets/icons/diamond.svg'
import VIP from '@/assets/icons/vip.svg'
import Promotion from '@/assets/icons/promotion.svg'
import HotMatch from '@/assets/icons/hot-match.svg'
import P2P from '@/assets/icons/p2p.svg'
import Games from '@/assets/icons/games.svg'
import Providers from '@/assets/icons/providers.svg'

const NavigationMenu = () => {
  const items = [
    { icon: Diamond, label: 'Diamond mine' },
    { icon: VIP, label: 'VIP' },
    { icon: Promotion, label: 'Promotion' },
    { icon: HotMatch, label: 'Hot Match' },
    { icon: P2P, label: 'P2P Transaction' },
    { icon: Games, label: 'Games' },
    { icon: Providers, label: 'Providers' },
  ]
  const itemsMobile = [
    { icon: RiSearchLine, label: 'Search' },
    { icon: Games, label: 'Games' },
    { icon: Providers, label: 'Providers' },
  ]

  return (
    <div className="mx-4 md:mx-8 xl:mx-32 2xl:mx-64 max-w-[2000px] space-y-3 lg:space-y-8 mb-10 pb-[30px] border-b border-primary-2">
      <div className="hidden lg:flex gap-4 justify-center">
        {items.map((item, index) => (
          <MenuItem key={index} label={item.label} Icon={item.icon} />
        ))}
      </div>
      <div className="flex lg:hidden gap-1 justify-center overflow-x-auto">
        {itemsMobile.map((item, index) => (
          <MenuItem key={index} label={item.label} Icon={item.icon} />
        ))}
      </div>
    </div>
  )
}

export default NavigationMenu
