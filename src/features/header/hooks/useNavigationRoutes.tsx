import { useTranslations } from 'next-intl'
import { Pathname } from '@/shared/utils/routes'
import DocIcon from '@/features/header/icons/DocIcon'

export const useNavigationRoutes = () => {
    const t = useTranslations()

    return [
        { route: Pathname.Home, label: t('header.navigation.home') },
        { route: Pathname.Home, label: t('header.navigation.faq') },
        { route: Pathname.Home, label: t('header.navigation.api'), openInNewTab: true, icon: <DocIcon /> },
        { route: Pathname.Home, label: t('header.navigation.howBuy') },
        { route: Pathname.Home, label: t('header.navigation.free') },
        { route: Pathname.Home, label: t('header.navigation.blog'), openInNewTab: true },
    ]
}