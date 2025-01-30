'use client'

import { HeaderProps } from '@/features/header/components/Header'
import { twMerge } from 'tailwind-merge'
import { Burger } from '@/features/header/components/tools/Burger'
import { useBoolean } from '@/shared/hooks/useBoolean'
import { LocaleSwitcher } from '@/features/header/components/tools/LocaleSwitcher'
import { useTranslations } from 'next-intl'
import { SignInButton } from '@/features/header/components/tools/SignInButton'
import { SignUpButton } from '@/features/header/components/tools/SignUpButton'
import { UserMenu } from '@/features/header/components/tools/UserMenu'
import { TopUpBalanceButton } from '@/features/header/components/tools/TopUpBalanceButton'
import { MobileOrdersButton } from '@/features/header/components/tools/MobileOrdersButton'
import { MobileMenu } from '@/features/header/components/MobileMenu'
import { usePathname } from '@/shared/hooks/usePathname'
import { clsx } from 'clsx'
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside'
import { useRef } from 'react'

type Props = { className?: string } & HeaderProps

export const MobileHeader = ({
    user,
    locale,
    onChangeLocale,
    isLight,
    onToggleTheme,
    className,
}: Props) => {
    const isOpen = useBoolean()
    const pathname = usePathname()
    const ref = useRef<HTMLDivElement>(null)

    useOnClickOutside(ref, isOpen.setFalse)

    return (
        <div ref={ref} className={twMerge('h-14 bg-header flex items-center justify-between p-1', className)}>
            <Burger
                open={isOpen.value}
                onToggle={isOpen.toggle}
            />
            <div className={'flex items-center'}>
                {user
                    ? <AuthTools user={user} />
                    : <NotAuthTools />
                }
                <LocaleSwitcher
                    locale={locale}
                    onChangeLocale={onChangeLocale}
                    className={'ml-1'}
                />
            </div>
            <MobileMenu
                activeRoute={pathname}
                className={clsx(
                    'fixed top-14 left-0 bottom-0 transition-transform duration-300 z-10 shadow-xl',
                    isOpen.value ? 'translate-x-0' : '-translate-x-full',
                )}
            />
        </div>
    )
}

const AuthTools = ({ user }: Required<Pick<HeaderProps, 'user'>>) => (
    <>
        <MobileOrdersButton
            activeOrdersCount={7}
            className={'ml-1'}
        />
        <TopUpBalanceButton
            balance={user.balance}
            className={'ml-1'}
        />
        <UserMenu
            id={user.id}
            className={'ml-1'}
        />
    </>
)

const NotAuthTools = () => (
    <>
        <SignInButton className={'ml-1'}/>
        <SignUpButton className={'ml-1 max-[377px]:hidden'}/>
    </>
)