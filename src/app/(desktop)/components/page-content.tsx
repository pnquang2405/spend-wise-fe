'use client'

import { useAuth } from '@/store/auth-store'
import Dashboard from './dashboard'
import LandingPage from './landing-page'

export default function PageContent() {
  const profile = useAuth((state) => state.profile)
  const logout = useAuth((state) => state.logout)

  const handleLogout = () => {
    logout()
  }

  return <>{profile ? <Dashboard profile={profile} /> : <LandingPage />}</>
}
