import ExclusiveGames from '@/components/exclusive-games'
import NavigationMenu from '@/components/navigation-menu'
import Providers from '@/components/providers'

const HomePage: React.FC = () => {
  return (
    <div>
      <NavigationMenu />
      <ExclusiveGames />
      <Providers />
    </div>
  )
}

export default HomePage
