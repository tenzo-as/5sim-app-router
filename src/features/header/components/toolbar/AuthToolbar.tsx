import { useAuth } from '@/features/auth/hooks/useAuth'
import { DesktopAuthToolbar } from '@/features/header/components/toolbar/DesktopAuthToolbar'
import { MobileAuthToolbar } from '@/features/header/components/toolbar/MobileAuthToolbar'

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
