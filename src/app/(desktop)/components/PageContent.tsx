'use client'

import { useState } from 'react'
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'

export default function PageContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return <>{isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <LandingPage onLogin={handleLogin} />}</>
}
