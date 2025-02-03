'use client'

import { HeaderProps } from '@/features/header/components/Header'
import { MobileMenu } from '@/features/header/components/MobileMenu'
import { Burger } from '@/features/header/components/tools/Burger'
import { LocaleSwitcher } from '@/features/header/components/tools/LocaleSwitcher'
import { MobileOrdersButton } from '@/features/header/components/tools/MobileOrdersButton'
import { SignInButton } from '@/features/header/components/tools/SignInButton'
import { SignUpButton } from '@/features/header/components/tools/SignUpButton'
import { TopUpBalanceButton } from '@/features/header/components/tools/TopUpBalanceButton'
import { UserMenu } from '@/features/header/components/tools/UserMenu'
import { useBoolean } from '@/shared/hooks/useBoolean'
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside'
import { usePathname } from '@/shared/hooks/usePathname'
import { clsx } from 'clsx'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

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
        <div
            ref={ref}
            className={twMerge(
                'flex h-14 items-center justify-between bg-header p-1 shadow-lg',
                className,
            )}
        >
            <Burger open={isOpen.value} onToggle={isOpen.toggle} />
            <div className={'z-20 flex items-center'}>
                {user ? <AuthTools user={user} /> : <NotAuthTools />}
                <LocaleSwitcher
                    locale={locale}
                    onChangeLocale={onChangeLocale}
                    className={'ml-1'}
                />
            </div>
            <MobileMenu
                activeRoute={pathname}
                className={clsx(
                    'fixed bottom-0 left-0 top-14 z-10 transition-transform duration-300',
                    isOpen.value ? 'translate-x-0' : '-translate-x-full',
                )}
                isLight={isLight}
                onToggleTheme={onToggleTheme}
            />
        </div>
    )
}

const AuthTools = ({ user }: Required<Pick<HeaderProps, 'user'>>) => (
    <>
        <MobileOrdersButton activeOrdersCount={7} className={'ml-1'} />
        <TopUpBalanceButton balance={user.balance} className={'ml-1'} />
        <UserMenu id={user.id} className={'ml-1'} />
    </>
)

const NotAuthTools = () => (
    <>
        <SignInButton className={'ml-1'} />
        <SignUpButton className={'ml-1 max-[377px]:hidden'} />
    </>
)
