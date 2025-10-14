// components/Dashboard.tsx
import React from 'react'
import Image from 'next/image'

interface DashboardProps {
  onLogout: () => void
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white flex-shrink-0 flex flex-col border-r">
        <div className="h-16 flex items-center justify-center border-b">
          {/* Thay thế gradient-text */}
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-sky-500 text-transparent bg-clip-text">
            <i className="fas fa-wallet mr-2"></i>SpendWise
          </div>
        </div>

        {/* ... Rest of the Dashboard component remains the same */}
        {/* ... Phần còn lại của component Dashboard giữ nguyên ... */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-4">
            <li className="px-6 py-2">
              <a href="#" className="flex items-center text-sky-600 bg-sky-100 px-4 py-2 rounded-lg">
                <i className="fas fa-home w-6"></i>
                <span className="ml-3 font-semibold">Tổng quan</span>
              </a>
            </li>
            <li className="px-6 py-2">
              <a href="#" className="flex items-center text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <i className="fas fa-exchange-alt w-6"></i>
                <span className="ml-3">Giao dịch</span>
              </a>
            </li>
            <li className="px-6 py-2">
              <a href="#" className="flex items-center text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <i className="fas fa-users w-6"></i>
                <span className="ml-3">Nhóm</span>
              </a>
            </li>
            <li className="px-6 py-2">
              <a href="#" className="flex items-center text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <i className="fas fa-calendar-check w-6"></i>
                <span className="ml-3">Lịch hẹn</span>
              </a>
            </li>
            <li className="px-6 py-2">
              <a href="#" className="flex items-center text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <i className="fas fa-compass w-6"></i>
                <span className="ml-3">Khám phá</span>
              </a>
            </li>
            <li className="px-6 py-2">
              <a href="#" className="flex items-center text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <i className="fas fa-cog w-6"></i>
                <span className="ml-3">Cài đặt</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
          >
            <i className="fas fa-sign-out-alt w-6"></i>
            <span className="ml-3">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Chào buổi sáng, An!</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-bell text-xl"></i>
            </button>
            <div className="relative">
              <Image
                className="h-10 w-10 rounded-full object-cover"
                src="https://placehold.co/100x100/E2E8F0/4A5568?text=An"
                alt="User avatar"
                width={40}
                height={40}
              />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <div className="flex space-x-4">
                <button className="flex-1 bg-emerald-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-emerald-600 transition duration-300 flex items-center justify-center shadow">
                  <i className="fas fa-plus-circle mr-2"></i> Thêm Chi Tiêu
                </button>
                <button className="flex-1 bg-sky-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-sky-600 transition duration-300 flex items-center justify-center shadow">
                  <i className="fas fa-calendar-plus mr-2"></i> Lên Lịch Hẹn
                </button>
                <button className="flex-1 bg-amber-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-amber-600 transition duration-300 flex items-center justify-center shadow">
                  <i className="fas fa-users-cog mr-2"></i> Tạo Nhóm Mới
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-gray-800">Tổng quan tháng này</h3>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Thu nhập</p>
                  <p className="text-2xl font-bold text-emerald-500">15.000.000đ</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Chi tiêu</p>
                  <p className="text-2xl font-bold text-red-500">6.450.000đ</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Số dư</p>
                  <p className="text-2xl font-bold text-gray-700">8.550.000đ</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-emerald-400 to-sky-500 h-2.5 rounded-full"
                    style={{ width: '43%' }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-gray-800">Ngân sách</h3>
              <div className="space-y-4 mt-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-700">Ăn uống</span>
                    <span className="text-sm font-medium text-gray-500">2.500.000 / 4.000.000đ</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-700">Mua sắm</span>
                    <span className="text-sm font-medium text-gray-500">1.800.000 / 2.000.000đ</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-gray-800">Lịch hẹn sắp tới</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center p-2 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-rose-100 text-rose-500 rounded-lg flex items-center justify-center font-bold mr-4">
                    15/10
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Ăn tối cùng nhóm "Du lịch Đà Lạt"</p>
                    <p className="text-sm text-gray-500">19:00 - Quán Bếp nhà</p>
                  </div>
                </li>
                <li className="flex items-center p-2">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-500 rounded-lg flex items-center justify-center font-bold mr-4">
                    18/10
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Xem phim với Mai</p>
                    <p className="text-sm text-gray-500">20:00 - CGV Vincom</p>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className="lg:col-span-2 bg-cover bg-center rounded-xl shadow flex flex-col justify-end p-6"
              style={{ backgroundImage: "url('https://placehold.co/600x400/3498db/ffffff?text=Du+lịch+ngay!')" }}
            >
              <div className="bg-black bg-opacity-40 p-4 rounded-lg">
                <h3 className="font-bold text-white text-xl">Gợi ý cho bạn</h3>
                <p className="text-white mt-1">Khám phá Vịnh Hạ Long cuối tuần này với ngân sách chỉ từ 2.500.000đ.</p>
                <button className="mt-3 bg-white text-sky-600 font-semibold px-4 py-2 text-sm rounded-lg hover:bg-gray-200">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
