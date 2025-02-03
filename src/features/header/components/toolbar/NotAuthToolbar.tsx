'use client'

import { useAuth } from '@/features/auth/hooks/useAuth'
import { LocaleSwitcher } from '@/features/header/components/tools/LocaleSwitcher'
import { clsx } from 'clsx'

export const NotAuthToolbar = () => {
    const { isAuthenticated } = useAuth()

    return (
        <div className={clsx('ml-auto', isAuthenticated && 'hidden')}>
            <LocaleSwitcher locale={'ru'} />
        </div>
    )
}
