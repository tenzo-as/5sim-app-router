import { useAuth } from '@/features/auth/hooks/useAuth'
import { DesktopAuthToolbar } from '@/features/Header/components/toolbar/DesktopAuthToolbar'
import { MobileAuthToolbar } from '@/features/Header/components/toolbar/MobileAuthToolbar'

export const AuthToolbar = () => {
    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) return null

    return (
        <>
            <MobileAuthToolbar />
            <DesktopAuthToolbar />
        </>
    )
}
