import { BudgetItem } from './budget-item'
import { EventItem } from './event-item'

export function DashboardCards() {
  return (
    <>
      <div className="lg:col-span-2 bg-white p-4 lg:p-6 rounded-xl shadow">
        <h3 className="font-semibold text-gray-800">Tổng quan tháng này</h3>
        <div className="mt-4 flex flex-col sm:flex-row justify-between sm:items-center space-y-4 sm:space-y-0">
          <div>
            <p className="text-sm text-gray-500">Thu nhập</p>
            <p className="text-2xl font-bold text-emerald-500">15.000.000đ</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Chi tiêu</p>
            <p className="text-2xl font-bold text-red-500">6.450.000đ</p>
          </div>
          <div className="sm:text-right">
            <p className="text-sm text-gray-500">Số dư</p>
            <p className="text-2xl font-bold text-gray-700">8.550.000đ</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-emerald-400 to-sky-500 h-2.5 rounded-full" style={{ width: '43%' }} />
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 bg-white p-4 lg:p-6 rounded-xl shadow">
        <h3 className="font-semibold text-gray-800">Ngân sách</h3>
        <div className="space-y-4 mt-4">
          <BudgetItem label="Ăn uống" spent={2500000} total={4000000} color="sky" />
          <BudgetItem label="Mua sắm" spent={1800000} total={2000000} color="amber" />
        </div>
      </div>
      <div className="lg:col-span-2 bg-white p-4 lg:p-6 rounded-xl shadow">
        <h3 className="font-semibold text-gray-800">Lịch hẹn sắp tới</h3>
        <ul className="mt-4 space-y-3">
          <EventItem
            date="15 Thg10"
            title='Ăn tối cùng nhóm "Du lịch Đà Lạt"'
            detail="19:00 - Quán Bếp nhà"
            color="rose"
          />
          <EventItem date="18 Thg10" title="Xem phim với Mai" detail="20:00 - CGV Vincom" color="indigo" />
        </ul>
      </div>
      <div
        className="lg:col-span-2 bg-cover bg-center rounded-xl shadow flex flex-col justify-end p-4 lg:p-6"
        style={{
          backgroundImage: "url('https://placehold.co/600x400/3498db/ffffff?text=Du+lịch+ngay!')",
        }}
      >
        <div className="bg-black bg-opacity-40 p-4 rounded-lg">
          <h3 className="font-bold text-white text-xl">Gợi ý cho bạn</h3>
          <p className="text-white mt-1">Khám phá Vịnh Hạ Long cuối tuần này với ngân sách chỉ từ 2.500.000đ.</p>
          <button className="mt-3 bg-white text-sky-600 font-semibold px-4 py-2 text-sm rounded-lg hover:bg-gray-200">
            Xem chi tiết
          </button>
        </div>
      </div>
    </>
  )
}
