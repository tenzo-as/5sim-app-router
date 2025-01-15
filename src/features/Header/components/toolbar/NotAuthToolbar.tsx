import { useAuth } from '@/features/auth/hooks/useAuth'
import { LanguageSwitcher } from '@/features/Header/components/tools/LanguageSwitcher'
import { clsx } from 'clsx'

export const NotAuthToolbar = () => {
    const { isAuthenticated } = useAuth()

    return (
        <div className={clsx('ml-auto', isAuthenticated && 'hidden')}>
            <LanguageSwitcher />
        </div>
    )
}
