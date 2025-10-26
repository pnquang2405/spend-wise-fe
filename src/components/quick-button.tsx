export function QuickButton({
  color,
  icon,
  text,
  onClick,
}: {
  color: string
  icon: React.ReactNode
  text: string
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 bg-${color}-500 text-white font-semibold py-3 px-4 rounded-lg hover:brightness-110 transition flex items-center justify-center shadow`}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  )
}
