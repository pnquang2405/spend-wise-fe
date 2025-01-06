import Header from '@/layouts/header'
import Footer from '@/layouts/footer'

interface Props {
  children: React.ReactNode
}
const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-system">
      <Header />
      <main
        className="relative flex-grow lg:pt-[100px] pt-[72px] md:space-y-[72px] space-y-6"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
