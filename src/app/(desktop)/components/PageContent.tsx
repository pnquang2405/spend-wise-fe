'use client'

import { useAuth } from '@/store/auth-store'
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'

export default function PageContent() {
  const profile = useAuth((state) => state.profile)
  console.log('profile', profile)

  const logout = useAuth((state) => state.logout)

  const handleLogout = () => {
    logout()
  }

  return <>{profile ? <Dashboard onLogout={handleLogout} /> : <LandingPage />}</>
}
