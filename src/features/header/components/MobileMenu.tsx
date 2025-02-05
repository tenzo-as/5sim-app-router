'use client'

import { DarkThemeIcon } from '@/features/header/icons/DarkThemeIcon'
import DocIcon from '@/features/header/icons/DocIcon'
import { LightThemeIcon } from '@/features/header/icons/LightThemeIcon'
import Divider from '@/shared/components/Divider'
import Link from '@/shared/components/Link'
import SupportButton from '@/shared/components/SupportButton'
import TelegramButton from '@/shared/components/TelegramButton'
import Text from '@/shared/components/Text'
import { Pathname } from '@/shared/utils/routes'
import { clsx } from 'clsx'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import SocialButton from '@/shared/components/SocialButton'
import { useNavigationRoutes } from '@/features/header/hooks/useNavigationRoutes'

type Props = {
    activeRoute?: string
    className?: string
    isLight?: boolean
    onToggleTheme?: () => void
    onClose?: () => void
}

export const MobileMenu = ({ className, isLight, activeRoute, onClose, onToggleTheme }: Props) => {
    const t = useTranslations()
    const navigationRoutes = useNavigationRoutes()

    return (
        <div className={twMerge('h-full w-[280px] bg-base-200 shadow-xl', className)}>
            <List>
                {navigationRoutes.map(({ route, label, icon }) => (
                    <ListItem key={label} activeRoute={activeRoute} route={route}>
                        <Link
                            href={route}
                            color={'inherit'}
                            underline={'none'}
                            className={'flex'}
                        >
                            {icon}{label}
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem activeRoute={activeRoute} route={Pathname.Home}>
                    <Link href={Pathname.Home} color={'inherit'} underline={'none'}>
                        {t('header.navigation.forDevelopers')}
                    </Link>
                </ListItem>
                <ListItem>
                    <div
                        onClick={onToggleTheme}
                        className={'flex items-center justify-between !py-1'}
                    >
                        {t(`header.theme.${isLight ? 'lightMode' : 'darkMode'}`)}
                        <div
                            className={
                                'flex h-10 w-[82px] justify-between rounded-3xl bg-[#F5F6F8] p-1 dark:bg-[#344A66]'
                            }
                        >
                            {[
                                { light: true, Icon: LightThemeIcon },
                                { light: false, Icon: DarkThemeIcon },
                            ].map(({ Icon, light }) => (
                                <div
                                    key={String(light)}
                                    className={clsx(
                                        'flex size-8 items-center justify-center rounded-full transition-colors',
                                        isLight === light && 'bg-primary text-primary-content',
                                    )}
                                >
                                    <Icon className={clsx()} />
                                </div>
                            ))}
                        </div>
                    </div>
                </ListItem>
            </List>
            <Divider />
            <div className={'mt-6 px-6'}>
                <TelegramButton.NewNumbers />
                <TelegramButton.NewsAndStocks className={'mt-3'} />

                <Text className={'mt-6'} medium>
                    {t('shared.needHelp')}
                </Text>
                <SupportButton className={'mt-3'} />

                <div className={'flex items-center justify-between mt-6'}>
                    <SocialButton.Instagram />
                    <SocialButton.VKontakte />
                    <SocialButton.YouTube />
                    <SocialButton.Facebook />
                    <SocialButton.Twitter />
                </div>
            </div>
        </div>
    )
}

const List = ({ children }: { children?: ReactNode }) => (
    <ul className={'menu w-full'}>{children}</ul>
)

const ListItem = ({
    activeRoute,
    route,
    children,
}: {
    activeRoute?: string
    route?: string
    children?: ReactNode
}) => (
    <li
        className={clsx(
            'text-base [&>*]:py-3',
            activeRoute && route && activeRoute.includes(route) && 'active',
        )}
    >
        {children}
    </li>
)
