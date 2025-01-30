import { MobileHeader } from '@/features/header/components/MobileHeader'
import { DesktopHeader } from '@/features/header/components/DesktopHeader'
import { Locale } from '@/shared/constants/LOCALES'
import { twMerge } from 'tailwind-merge'

export type HeaderProps = {
    locale: Locale
    onChangeLocale?: (locale: Locale) => void
    user?: {
        balance: number
        id: number
        activeOrdersCount?: number,
    }
    onSignIn?: () => void
    onSignUp?: () => void
    onSignOut?: () => void
    isLight: boolean
    onToggleTheme?: () => void
    slotProps?: {
        MobileHeader?: { className?: string },
        DesktopHeader?: { className?: string },
    },
}

const Header = ({ slotProps, ...props }: HeaderProps) => {
    return (
        <>
            <MobileHeader
                className={twMerge('md:hidden', slotProps?.MobileHeader?.className)}
                {...props}
                user={{
                    id: 2323,
                    balance: 232
                }}
            />
            <DesktopHeader
                className={twMerge('max-md:hidden', slotProps?.DesktopHeader?.className)}
                {...props}
            />
        </>
    )
}

export default Header