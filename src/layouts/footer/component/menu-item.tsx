'use client'
import { useState } from 'react'
import Link from 'next/link'
import { RiArrowDownSLine } from 'react-icons/ri'
import routes from '@/utils/routers'
import games from '@/data/games-footer.json'

const MenuItem = () => {
  const [isOpenGames, setIsOpenGames] = useState(false)
  const [isOpenAbout, setIsOpenAbout] = useState(false)
  const [isOpenLegal, setIsOpenLegal] = useState(false)

  return (
    <div className="flex lg:hidden w-full flex-col space-y-4">
      <div className="flex w-full flex-col space-y-2">
        <div
          className="w-full bg-primary-4 rounded-lg cursor-pointer flex justify-between h-[47px] items-center px-4"
          onClick={() => setIsOpenGames(!isOpenGames)}
        >
          <span>Games</span>
          <div className={`w-4 h-4 ${!isOpenGames && 'rotate-180'}`}>
            <RiArrowDownSLine />
          </div>
        </div>
        {isOpenGames && (
          <div className="flex flex-col items-start bg-primary-4 rounded-lg cursor-pointer">
            {games.map((item) => (
              <div className="h-10 flex justify-between items-center hover:bg-primary-3 hover:rounded-lg w-full px-4">
                <Link
                  key={item.id}
                  href={`${routes.game.path}/${item.slug}.${item.id}`}
                  className="text-gray hover:underline"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex w-full flex-col space-y-2">
        <div
          className="w-full bg-primary-4 rounded-lg cursor-pointer flex justify-between h-[47px] items-center px-4"
          onClick={() => setIsOpenAbout(!isOpenAbout)}
        >
          <span>About</span>
          <div className={`w-4 h-4 ${!isOpenAbout && 'rotate-180'}`}>
            <RiArrowDownSLine />
          </div>
        </div>
        {isOpenAbout && (
          <div className="flex flex-col items-start bg-primary-4 rounded-lg cursor-pointer">
            {['About Us', 'Promotions', 'VIP', 'Help Center', 'Awards & Certificates', 'App'].map((item, index) => (
              <div className="h-10 flex justify-between items-center hover:bg-primary-3 hover:rounded-lg w-full px-4">
                <Link key={index} href={routes.home.path} className="text-gray hover:underline">
                  {item}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex w-full flex-col space-y-2">
        <div
          className="w-full bg-primary-4 rounded-lg cursor-pointer flex justify-between h-[47px] items-center px-4"
          onClick={() => setIsOpenLegal(!isOpenLegal)}
        >
          <span>Legal Information</span>
          <div className={`w-4 h-4 ${!isOpenLegal && 'rotate-180'}`}>
            <RiArrowDownSLine />
          </div>
        </div>
        {isOpenLegal && (
          <div className="flex flex-col items-start bg-primary-4 rounded-lg cursor-pointer">
            {[
              'General Term & Conditions',
              'Responsible Gaming Policy',
              'Sports Betting Rules',
              'Privacy and Cookies Policy',
              'Payment Methods',
              'Limits',
            ].map((item, index) => (
              <div className="h-10 flex justify-between items-center hover:bg-primary-3 hover:rounded-lg w-full px-4">
                <Link key={index} href={routes.home.path} className="text-gray hover:underline">
                  {item}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuItem
