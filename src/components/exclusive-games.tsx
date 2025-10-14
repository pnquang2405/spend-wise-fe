import GameCard from '@/components/game-card'
import SeeAll from '@/assets/icons/see-all.svg'
import games from '@/data/exclusive-game.json'

const ExclusiveGames = () => {
  return (
    <div className="mx-4 md:mx-8 xl:mx-32 2xl:mx-64 max-w-[2000px] space-y-3 lg:space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <span className="lg:text-4xl lg:normal-case uppercase">Exclusive Games</span>
        <div className="flex space-x-2 cursor-pointer">
          <span className="hidden md:flex">SEE ALL</span>
          <SeeAll />
        </div>
      </div>
      <div className="flex justify-between items-start space-x-3 overflow-x-auto">
        {games.map((game) => (
          <GameCard key={game.id} image={game.image} tag={game.tag} />
        ))}
      </div>
    </div>
  )
}

export default ExclusiveGames
