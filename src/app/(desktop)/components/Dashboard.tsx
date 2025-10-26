'use client'
import { useState } from 'react'
import {
  FaWallet,
  FaHome,
  FaExchangeAlt,
  FaUsers,
  FaCalendarCheck,
  FaCompass,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaPlusCircle,
  FaCalendarPlus,
  FaUsersCog,
} from 'react-icons/fa'
import { QuickButton } from '@/components/quick-button'
import { DashboardCards } from './dashboard-cards'
import { SideBarItem } from './side-bar-item'
import { AddExpenseDialog } from '@/components/modals/add-expense-modal'
import { UserProfile } from '@/store/auth-store'

export default function Dashboard({ profile }: { profile: UserProfile }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [openAddExpenseDialog, setOpenAddExpenseDialog] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)

  return (
    <>
      <div className="font-['Be_Vietnam_Pro'] bg-gray-100 min-h-screen">
        <div id="logged-in-view" className="relative min-h-screen lg:flex">
          {isSidebarOpen && (
            <div onClick={toggleSidebar} className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" />
          )}
          <aside
            className={`fixed inset-y-0 left-0 w-64 bg-white flex-shrink-0 flex flex-col border-r z-30 transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}
          >
            <div className="h-16 flex items-center justify-center border-b">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                <FaWallet className="inline mr-2" /> SpendWise
              </div>
            </div>
            <nav className="flex-1 overflow-y-auto">
              <ul className="py-4">
                <SideBarItem active icon={<FaHome />} text="Tổng quan" />
                <SideBarItem icon={<FaExchangeAlt />} text="Giao dịch" />
                <SideBarItem icon={<FaUsers />} text="Nhóm" />
                <SideBarItem icon={<FaCalendarCheck />} text="Lịch hẹn" />
                <SideBarItem icon={<FaCompass />} text="Khám phá" />
                <SideBarItem icon={<FaCog />} text="Cài đặt" />
              </ul>
            </nav>
            <div className="p-4 border-t">
              <button className="w-full flex items-center justify-center text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <FaSignOutAlt className="w-6" />
                <span className="ml-3">Đăng xuất</span>
              </button>
            </div>
          </aside>
          <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
            <header className="h-16 bg-white border-b flex items-center justify-between px-4 lg:px-6">
              <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 lg:hidden">
                <FaBars className="text-xl" />
              </button>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-800">Chào buổi sáng, An!</h1>
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://placehold.co/100x100/E2E8F0/4A5568?text=An"
                alt="User avatar"
              />
            </header>

            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
                <QuickButton
                  onClick={() => setOpenAddExpenseDialog(true)}
                  color="emerald"
                  icon={<FaPlusCircle />}
                  text="Thêm Chi Tiêu"
                />
                <QuickButton color="sky" icon={<FaCalendarPlus />} text="Lên Lịch Hẹn" />
                <QuickButton color="amber" icon={<FaUsersCog />} text="Tạo Nhóm Mới" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <DashboardCards />
              </div>
            </main>
          </div>
        </div>
      </div>
      <AddExpenseDialog open={openAddExpenseDialog} onOpenChange={setOpenAddExpenseDialog} profile={profile} />
    </>
  )
}
