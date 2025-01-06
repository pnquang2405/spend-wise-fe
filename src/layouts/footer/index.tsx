'use client'
import Link from 'next/link'
import { RiArrowDownSLine } from 'react-icons/ri'
import routes, { headerLinks } from '@/utils/routers'
import Telegram from '@/assets/icons/telegram.svg'
import Facebook from '@/assets/icons/facebook.svg'
import Instagram from '@/assets/icons/instagram.svg'
import Twitter from '@/assets/icons/twitter.svg'
import IOS from '@/assets/icons/ios.svg'
import Android from '@/assets/icons/android.svg'
import games from '@/data/games-footer.json'
import { useState } from 'react'
import MenuItem from './component/menu-item'

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <footer className="bg-primary-2 w-full z-50 lg:h-[387px] h-auto flex items-center justify-center">
      <nav className="mx-4 md:mx-8 xl:mx-32 2xl:mx-64 max-w-[2000px] flex justify-center items-center h-full w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full h-full py-[60px]">
          <MenuItem />
          <div className="flex flex-col w-full lg:w-1/6 space-y-[50px] items-center">
            <div className="flex lg:flex-col justify-center items-center lg:items-start w-full lg:space-y-4 bg-primary-4 lg:bg-transparent rounded-lg h-[76px] lg:h-auto px-4 lg:px-0 order-2 lg:order-1">
              <div className="flex flex-col w-2/3 lg:w-full space-y-2">
                <span className="lg:text-3xl lg:font-bold">Help Center</span>
                <span className="text-gray text-sm sm:text-base">If you have any questions?</span>
              </div>
              <Link
                href={routes.home.path}
                aria-label="Get Answers"
                className="bg-primary-3 text-white w-1/3 lg:w-full py-2 rounded-lg transition text-center text-xs sm:text-base"
              >
                GET ANSWERS
              </Link>
            </div>
            <div className="w-full flex flex-col items-center order-1 lg:order-2">
              <span className="flex lg:hidden mb-[22px]"> Follow Us</span>
              <div className="flex justify-between max-w-[300px] px-2 lg:px-0 w-full mb-[40px] lg:mb-0">
                <Telegram className="cursor-pointer" />
                <Facebook className="cursor-pointer" />
                <Instagram className="cursor-pointer" />
                <Twitter className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-between w-3/6 space-x-2">
            <div className="flex flex-col items-start space-y-5">
              <span>Games</span>
              {games.map((game) => (
                <Link
                  key={game.id}
                  href={`${routes.game.path}/${game.slug}.${game.id}`}
                  className="text-gray hover:underline"
                >
                  {game.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start space-y-5">
              <span>About</span>
              {['About Us', 'Promotions', 'VIP', 'Help Center', 'Awards & Certificates', 'App'].map((about, index) => (
                <Link key={index} href={routes.home.path} className="text-gray hover:underline">
                  {about}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start space-y-5">
              <span>Legal Information</span>
              {[
                'General Term & Conditions',
                'Responsible Gaming Policy',
                'Sports Betting Rules',
                'Privacy and Cookies Policy',
                'Payment Methods',
                'Limits',
              ].map((about, index) => (
                <Link key={index} href={routes.home.path} className="text-gray hover:underline">
                  {about}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/8 xl:w-1/8 space-y-2 order-3">
            <div className="hidden lg:flex w-full bg-primary-4 py-[6px] pl-[10px] pr-[18px] space-x-2 rounded-lg cursor-pointer">
              <div className="w-[42px] h-[42px]">
                <IOS />
              </div>
              <span>Bluechip App for Mac OS</span>
            </div>
            <div className="flex w-full">
              <div className="flex lg:flex-col items-center justify-center w-1/2 bg-primary-4 py-[6px] pl-[10px] pr-[18px] space-x-2 rounded-lg mr-1 cursor-pointer">
                <div className="w-[42px] h-[42px]">
                  <Android />
                </div>
                <span className="hidden lg:flex text-gray">Android</span>
                <div className="flex lg:hidden flex-col">
                  <span className="text-sm sm:text-base">Bluechip App</span>
                  <span className="text-gray text-sm sm:text-base">for Android</span>
                </div>
              </div>
              <div className="flex lg:flex-col items-center justify-center w-1/2 bg-primary-4 py-[6px] pl-[10px] pr-[18px] space-x-2 rounded-lg ml-1 cursor-pointer">
                <div className="w-[42px] h-[42px]">
                  <IOS />
                </div>
                <span className="hidden lg:flex text-gray">iOS</span>
                <div className="flex lg:hidden flex-col">
                  <span className="text-sm sm:text-base">Bluechip App</span>
                  <span className="text-gray text-sm sm:text-base">for iOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
