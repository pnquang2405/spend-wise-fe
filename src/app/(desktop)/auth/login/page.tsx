'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { RegisterForm } from './components/RegisterForm'
import { LoginForm } from './components/LoginForm'

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true)
  const router = useRouter()
  const toggleView = () => setIsLoginView(!isLoginView)

  const handleLoginSuccess = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen flex">
      <div
        className="hidden lg:flex w-1/2 relative items-end p-12 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522881193457-31ae824a86a5?q=80&w=1887&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-sky-800 opacity-60"></div>
        <div className="relative z-10">
          <div
            className="text-4xl font-bold"
            style={{
              background: 'linear-gradient(to right, #6ee7b7, #7dd3fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <i className="fas fa-wallet mr-2"></i>SpendWise
          </div>
          <h1 className="text-4xl font-bold mt-4 leading-tight">Chi tiêu thông minh,</h1>
          <h1 className="text-4xl font-bold leading-tight">cuộc vui thêm trọn vẹn.</h1>
          <p className="mt-4 text-lg text-sky-200">
            Công cụ giúp bạn cân bằng tài chính và không bỏ lỡ bất kỳ cuộc vui nào với bạn bè.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          {isLoginView ? (
            <LoginForm onLoginSuccess={handleLoginSuccess} onShowRegister={toggleView} />
          ) : (
            <RegisterForm onLoginSuccess={handleLoginSuccess} onShowLogin={toggleView} />
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthPage
