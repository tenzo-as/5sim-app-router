import { useTranslations } from 'next-intl'
import { Pathname } from '@/shared/utils/routes'
import DocIcon from '@/features/header/icons/DocIcon'

export const useNavigationRoutes = () => {
    const t = useTranslations('header')

    return [
        { route: Pathname.Home, label: t('navigation.home') },
        { route: Pathname.Home, label: t('navigation.faq') },
        { route: Pathname.Home, label: t('navigation.api'), openInNewTab: true, icon: <DocIcon /> },
        { route: Pathname.Manual, label: t('navigation.howBuy') },
        { route: Pathname.Home, label: t('navigation.free') },
        { route: Pathname.Home, label: t('navigation.blog'), openInNewTab: true },
    ]
}