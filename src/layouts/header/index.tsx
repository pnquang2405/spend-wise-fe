import Link from 'next/link'
import routes, { headerLinks } from '@/utils/routers'
import { RiMenu2Fill, RiSearchLine } from 'react-icons/ri'
import Logo from '@/assets/icons/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="bg-system lg:shadow-md fixed top-0 w-full z-50 md:h-[68px] h-[60px] flex items-center justify-center">
      <nav className="mx-4 md:mx-8 xl:mx-32 2xl:mx-64 max-w-[2000px] flex justify-center items-center h-full w-full">
        <div className="flex items-center justify-between w-full h-full">
          <div className="flex space-x-[72px]">
            <div className="flex items-center space-x-3">
              <RiMenu2Fill className="w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
              <Link href={routes.home.path} aria-label="Home">
                <Logo className="cursor-pointer h-6 md:h-8" />
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              <RiSearchLine className="w-7 h-7 mr-9 cursor-pointer" />
              {headerLinks.map((link, index) => (
                <Link key={index} href={link.path}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href={routes.login.path}
              aria-label="Login"
              className="bg-primary-2 text-white px-3 md:px-6 py-1 md:py-2 rounded-lg transition"
            >
              {routes.login.label}
            </Link>
            <Link
              href={routes.registration.path}
              aria-label="Registration"
              className="bg-green text-white px-3 md:px-6 py-1 md:py-2 rounded-lg hover:bg-green-600 transition"
            >
              {routes.registration.label}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
