export function QuickButton({ color, icon, text }: { color: string; icon: React.ReactNode; text: string }) {
  return (
    <button
      className={`flex-1 bg-${color}-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-${color}-600 transition flex items-center justify-center shadow`}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  )
}
