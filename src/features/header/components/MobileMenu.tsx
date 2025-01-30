import { twMerge } from 'tailwind-merge'
import { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import DocIcon from '@/features/header/components/icons/DocIcon'
import Link from '@/shared/components/Link'
import { Pathname } from '@/shared/utils/routes'

type Props = {
    activeRoute: Pathname
    className?: string
}

export const MobileMenu = ({ className }: Props) => {
    const t = useTranslations()

    const mainRoutes = [
        { route: Pathname.Home, label: t('header.navigation.home') },
        { route: Pathname.Home, label: t('header.navigation.faq'), icon: <DocIcon /> },
        { route: Pathname.Home, label: t('header.navigation.api'), openInNewTab: true },
        { route: Pathname.Home, label: t('header.navigation.howBuy') },
        { route: Pathname.Home, label: t('header.navigation.free') },
        { route: Pathname.Home, label: t('header.navigation.blog'), openInNewTab: true },
    ]

    return (
        <div className={twMerge('w-[320px]', className)}>
            <List>
                {mainRoutes.map(({ route, label }) =>
                    <li key={label}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                )}
            </List>
        </div>
    )
}

const List = ({ children }: { children?: ReactNode }) => (
    <ul className={'menu w-full'}>
        {children}
    </ul>
)

const ListItem = ({ activeRoute, children }: { activeRoute: boolean, children?: ReactNode }) => {}