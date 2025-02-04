import { HeaderProps } from '@/features/header/components/Header'
import { TopUpBalanceButton } from '@/features/header/components/tools/TopUpBalanceButton'
import { UserMenu } from '@/features/header/components/tools/UserMenu'
import { SignInButton } from '@/features/header/components/tools/SignInButton'
import { SignUpButton } from '@/features/header/components/tools/SignUpButton'
import { LocaleSwitcher } from '@/features/header/components/tools/LocaleSwitcher'
import { ThemeSwitcher } from '@/features/header/components/tools/ThemeSwitcher'
import { DesktopOrdersButton } from '@/features/header/components/tools/DesktopOrdersButton'
import { useNavigationRoutes } from '@/features/header/hooks/useNavigationRoutes'
import Link from '@/shared/components/Link'

type Props = {
    className: string
} & HeaderProps

export const DesktopHeader = ({
    className,
    user,
    locale,
    onChangeLocale,
    isLight,
    onToggleTheme
}: Props) => {
    const navigationRoutes = useNavigationRoutes()

    return (
        <div className={className}>
            <div className={'flex h-14 items-center justify-end bg-header px-6'}>
                {user ? <AuthTools user={user} /> : <NotAuthTools />}
                <ThemeSwitcher
                    isLight={isLight}
                    onToggle={onToggleTheme}
                />
                <LocaleSwitcher
                    locale={locale}
                    onChangeLocale={onChangeLocale}
                    className={'ml-2'}
                />
            </div>
            <nav className={'bg-base-200 px-6'}>
                <ul className={'flex items-center justify-start'}>
                    {navigationRoutes.map(({ route, label }) =>
                        <li key={label}>
                            <Link
                                href={route}
                                color={'inherit'}
                                underline={'none'}
                                className={'h-14 flex items-center px-4 hover:bg-neutral/15 font-medium'}
                            >
                                {label}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

const AuthTools = ({ user }: Required<Pick<HeaderProps, 'user'>>) => (
    <>
        <DesktopOrdersButton activeOrdersCount={7} className={'ml-6'} />
        <TopUpBalanceButton balance={user.balance} className={'ml-6'} />
        <UserMenu id={user.id} className={'ml-6 mr-2'} />
    </>
)

const NotAuthTools = () => (
    <>
        <SignInButton className={'ml-6'} />
        <SignUpButton className={'ml-6 mr-6'} />
    </>
)
