export function EventItem({
  date,
  title,
  detail,
  color,
}: {
  date: string
  title: string
  detail: string
  color: string
}) {
  return (
    <li className="flex items-center p-2 bg-gray-50 rounded-lg">
      <div
        className={`w-10 h-10 bg-${color}-100 text-${color}-500 rounded-lg flex items-center justify-center font-bold mr-4 text-center leading-4`}
      >
        {date.replace(' ', '\n')}
      </div>
      <div>
        <p className="font-semibold text-gray-700">{title}</p>
        <p className="text-sm text-gray-500">{detail}</p>
      </div>
    </li>
  )
}
