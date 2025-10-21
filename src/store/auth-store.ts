import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface UserProfile {
  id: number
  email: string
  name?: string
}

interface AuthState {
  profile: UserProfile | null
  setProfile: (profile: UserProfile | null) => void
  logout: () => void
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
      logout: () => set({ profile: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ profile: state.profile }),
    },
  ),
)
