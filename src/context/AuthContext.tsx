import React, { createContext, useContext } from 'react'

type User = { email?: string; name?: string; role?: string }

interface AuthContextValue {
  user: User | null
  profile: any | null
  roles: string[]
  isAdmin: boolean
  isManager: boolean
  isCustomer: boolean
  isWorker: boolean
  signIn: (email: string, password: string) => Promise<never>
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

// Stubbed provider: authentication is disabled for now — returns no user and no-op/throwing auth functions
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value: AuthContextValue = {
    user: null,
    profile: null,
    roles: [],
    isAdmin: false,
    isManager: false,
    isCustomer: false,
    isWorker: false,
    signIn: async () => {
      throw new Error('Sign in is disabled')
    },
    signOut: () => {},
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export default AuthContext
