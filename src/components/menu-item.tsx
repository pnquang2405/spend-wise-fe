interface Props {
  label: string
  Icon: React.ComponentType<any>
}

const MenuItem: React.FC<Props> = ({ label, Icon }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 border border-primary-2 rounded-lg text-white hover:border-primary-3 cursor-pointer transition w-full h-[57px]">
      <div className="w-6">
        <Icon />
      </div>
      <span>{label}</span>
    </div>
  )
}

export default MenuItem
