export function BudgetItem({
  label,
  spent,
  total,
  color,
}: {
  label: string
  spent: number
  total: number
  color: string
}) {
  const percent = Math.min((spent / total) * 100, 100)
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-500">
          {spent.toLocaleString()} / {total.toLocaleString()}đ
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`bg-${color}-500 h-2.5 rounded-full`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
