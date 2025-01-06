import ProviderCard from '@/components/provider-card'
import SeeAll from '@/assets/icons/see-all.svg'
import providers from '@/data/providers.json'

const Providers: React.FC = () => {
  return (
    <div className="mx-4 md:mx-8 xl:mx-32 2xl:mx-64 max-w-[2000px] space-y-3 lg:space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <span className="lg:text-4xl text-start lg:normal-case uppercase">All Providers</span>
        <div className="flex space-x-2 cursor-pointer">
          <span className="hidden md:flex">SEE ALL</span>
          <SeeAll />
        </div>
      </div>
      <div className="flex justify-center items-start px-0 2xl:px-[54px] space-x-3 overflow-x-auto">
        {providers.map((provider) => (
          <ProviderCard
            key={provider.id}
            name={provider.name}
            numberOfGames={provider.numberOfGames}
            image={provider.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Providers
