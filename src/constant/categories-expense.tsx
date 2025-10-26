import {
  Utensils,
  ShoppingBag,
  Film,
  FileText,
  MoreHorizontal,
  HeartPulse,
  BookOpen,
  Gift,
  Dumbbell,
  PawPrint,
  Plane,
  Home,
} from 'lucide-react'

export const categoriesKey = {
  EAT_DRINK: 1,
  SHOPPING: 2,
  HOUSE: 3,
  ENTERTAINMENT: 4,
  BILL: 5,
  HEALTH: 6,
  EDUCATION: 7,
  GIFT: 8,
  SPORT: 9,
  PET: 10,
  TRIP: 11,
  OTHER: 12,
}

export const categoriesExpense = [
  {
    key: categoriesKey.EAT_DRINK,
    icon: <Utensils className="w-5 h-5" />,
    color: 'bg-emerald-100 text-emerald-600',
    label: 'Ăn uống',
  },
  {
    key: categoriesKey.SHOPPING,
    icon: <ShoppingBag className="w-5 h-5" />,
    color: 'bg-sky-100 text-sky-600',
    label: 'Mua sắm',
  },
  {
    key: categoriesKey.HOUSE,
    icon: <Home className="w-5 h-5" />,
    color: 'bg-cyan-100 text-cyan-600',
    label: 'Tiền nhà',
  },
  {
    key: categoriesKey.ENTERTAINMENT,
    icon: <Film className="w-5 h-5" />,
    color: 'bg-rose-100 text-rose-600',
    label: 'Giải trí',
  },
  {
    key: categoriesKey.BILL,
    icon: <FileText className="w-5 h-5" />,
    color: 'bg-indigo-100 text-indigo-600',
    label: 'Hóa đơn',
  },
  {
    key: categoriesKey.HEALTH,
    icon: <HeartPulse className="w-5 h-5" />,
    color: 'bg-pink-100 text-pink-600',
    label: 'Sức khỏe',
  },
  {
    key: categoriesKey.EDUCATION,
    icon: <BookOpen className="w-5 h-5" />,
    color: 'bg-purple-100 text-purple-600',
    label: 'Giáo dục',
  },
  {
    key: categoriesKey.GIFT,
    icon: <Gift className="w-5 h-5" />,
    color: 'bg-yellow-100 text-yellow-600',
    label: 'Quà tặng',
  },
  {
    key: categoriesKey.SPORT,
    icon: <Dumbbell className="w-5 h-5" />,
    color: 'bg-orange-100 text-orange-600',
    label: 'Thể thao',
  },
  {
    key: categoriesKey.PET,
    icon: <PawPrint className="w-5 h-5" />,
    color: 'bg-lime-100 text-lime-600',
    label: 'Thú cưng',
  },
  {
    key: categoriesKey.TRIP,
    icon: <Plane className="w-5 h-5" />,
    color: 'bg-teal-100 text-teal-600',
    label: 'Du lịch',
  },
  {
    key: categoriesKey.OTHER,
    icon: <MoreHorizontal className="w-5 h-5" />,
    color: 'bg-gray-100 text-gray-600',
    label: 'Khác',
  },
]
