import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-sky-500 text-transparent bg-clip-text">
            <i className="fas fa-wallet mr-2"></i>SpendWise
          </div>
          <div>
            <a href="#features" className="text-gray-600 hover:text-sky-500 px-3 py-2">
              Tính năng
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-sky-500 px-3 py-2">
              Bảng giá
            </a>
            <a href="#contact" className="text-gray-600 hover:text-sky-500 px-3 py-2">
              Liên hệ
            </a>
            <Link href="/user/login">
              <button className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-sky-600 transition duration-300 ml-4">
                Đăng nhập
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-sky-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Chi tiêu thông minh,
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-sky-500 text-transparent bg-clip-text">
                cuộc vui thêm trọn vẹn.
              </span>
            </h1>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              SpendWise là trợ lý tài chính cá nhân, giúp bạn quản lý tiền bạc, lập kế hoạch cho các buổi hẹn và chia sẻ
              chi phí với bạn bè một cách dễ dàng.
            </p>
            <div className="mt-8">
              <Link href="/user/login">
                <button className="bg-emerald-500 text-white font-bold px-8 py-3 rounded-full hover:bg-emerald-600 transition duration-300 text-lg shadow-lg">
                  Bắt đầu miễn phí
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Tất cả trong một ứng dụng</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Từ quản lý chi tiêu cá nhân đến lên kế hoạch cho cả nhóm, SpendWise đều có thể giúp bạn.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-emerald-500 text-4xl mb-4">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quản lý Thu & Chi</h3>
                <p className="text-gray-600">
                  Ghi chép nhanh chóng, thống kê trực quan qua biểu đồ. Luôn biết tiền của bạn đã đi đâu.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-sky-500 text-4xl mb-4">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Lên lịch hẹn & Sự kiện</h3>
                <p className="text-gray-600">
                  Tạo các buổi đi chơi, hẹn hò, họp mặt và mời bạn bè tham gia ngay trên ứng dụng.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-amber-500 text-4xl mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tạo nhóm & Chia tiền</h3>
                <p className="text-gray-600">
                  Tự động chia đều hoặc tùy chỉnh các khoản chi trong nhóm. Không còn ngại ngùng đòi tiền bạn bè.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-indigo-500 text-4xl mb-4">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Gợi ý địa điểm & Chi phí</h3>
                <p className="text-gray-600">
                  Khám phá các địa điểm du lịch, ăn uống được đề xuất cùng ước tính chi phí cho chuyến đi.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-rose-500 text-4xl mb-4">
                  <i className="fas fa-piggy-bank"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Phân bổ Ngân sách</h3>
                <p className="text-gray-600">
                  Đặt ra các hạn mức chi tiêu cho từng danh mục (ăn uống, mua sắm...) và nhận cảnh báo khi sắp vượt mức.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-teal-500 text-4xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bảo mật & Riêng tư</h3>
                <p className="text-gray-600">
                  Dữ liệu của bạn được mã hóa và bảo vệ an toàn. Chúng tôi tôn trọng quyền riêng tư của bạn.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
