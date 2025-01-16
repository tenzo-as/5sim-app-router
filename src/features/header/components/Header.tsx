import { MobileHeader } from '@/features/header/components/MobileHeader'
import { DesktopHeader } from '@/features/header/components/DesktopHeader'
import { Locale } from '@/shared/constants/LOCALES'

export type HeaderProps = {
    locale: Locale
    onChangeLocale?: (locale: Locale) => void
    user?: {
        balance: number
        id: number
    }
    onSignIn?: () => {}
    onSignUp?: () => {}
    onSignOut?: () => {}
}

const Header = (props: HeaderProps) => {
    return (
        <>
            <MobileHeader
                className={'md:hidden'}
                {...props}
            />
            <DesktopHeader
                className={'max:md:hidden'}
                {...props}
            />
        </>
    )
}

export default Header