interface Props {
  children: React.ReactNode
}
const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-system">
      <main
        className="relative flex-grow md:space-y-[72px] space-y-6"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout
