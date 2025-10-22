export function SideBarItem({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <li className="px-6 py-2">
      <a
        href="#"
        className={`flex items-center px-4 py-2 rounded-lg transition ${
          active ? 'text-sky-600 bg-sky-100 font-semibold' : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <span className="w-6 flex justify-center">{icon}</span>
        <span className="ml-3">{text}</span>
      </a>
    </li>
  )
}
