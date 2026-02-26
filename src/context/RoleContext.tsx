import React, { createContext, useContext, useEffect, useState } from 'react'

type Role = 'viewer' | 'customer' | 'admin'

interface RoleContextValue {
  role: Role
  setRole: (r: Role) => void
  isAdmin: boolean
  isCustomer: boolean
}

const RoleContext = createContext<RoleContextValue | undefined>(undefined)

const STORAGE_KEY = 'sahuri_role'

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<Role>(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY)
      return (v as Role) || 'viewer'
    } catch {
      return 'viewer'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, role)
    } catch {}
  }, [role])

  const setRole = (r: Role) => setRoleState(r)

  const value: RoleContextValue = {
    role,
    setRole,
    isAdmin: role === 'admin',
    isCustomer: role === 'customer' || role === 'admin',
  }

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
}

export function useRole() {
  const ctx = useContext(RoleContext)
  if (!ctx) throw new Error('useRole must be used within RoleProvider')
  return ctx
}

export default RoleContext
