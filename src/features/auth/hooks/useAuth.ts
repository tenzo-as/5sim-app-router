import { AuthContext } from '@/features/auth/components/AuthProvider'
import { useContext } from 'react'

export const useAuth = () => useContext(AuthContext)
