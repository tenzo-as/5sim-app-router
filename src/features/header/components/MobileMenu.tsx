import { twMerge } from 'tailwind-merge'
import { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import DocIcon from '@/features/header/components/icons/DocIcon'
import Link from '@/shared/components/Link'
import { Pathname } from '@/shared/utils/routes'
import { clsx } from 'clsx'

type Props = {
    activeRoute?: string
    className?: string
}

export const MobileMenu = ({ className, activeRoute }: Props) => {
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
        <div className={twMerge('w-[320px] h-full bg-base-100', className)}>
            <List>
                {mainRoutes.map(({ route, label }) =>
                    <ListItem key={label} activeRoute={activeRoute} route={route}>
                        <Link
                            href={route}
                            color={'inherit'}
                        >
                            {label}
                        </Link>
                    </ListItem>
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

const ListItem = (
    { activeRoute, route, children }:
    {
        activeRoute: string,
        route: string,
        children?: ReactNode
    }
) => (
    <li className={clsx(activeRoute.includes(route) && 'active')}>
        {children}
    </li>
)