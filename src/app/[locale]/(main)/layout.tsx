'use client'

import Header from '@/features/header/components/Header'
import { useTheme } from '@/features/theme/hooks/useTheme'
import { Locale } from '@/shared/constants/LOCALES'
import { useLocale } from '@/shared/hooks/useLocale'
import { useParams } from '@/shared/hooks/useParams'
import { usePathname } from '@/shared/hooks/usePathname'
import { useRouter } from '@/shared/hooks/useRouter'
import { ReactNode, useTransition } from 'react'
import Sidebar from '@/features/sidebar/components/Sidebar'

type Props = {
    children: ReactNode
}

const MainLayout = ({ children }: Props) => {
    const query = useParams()
    const locale = useLocale()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const { isLight, toggleTheme } = useTheme()

    const changeLocale = (locale: Locale) => {
        startTransition(() => {
            router.push({ pathname, query }, { locale })
        })
    }

    return (
        <div className={'grid'}>
            <Header
                locale={locale}
                onChangeLocale={locale => changeLocale(locale)}
                isLight={isLight}
                onToggleTheme={toggleTheme}
            />
            <Sidebar
                className={''}
            />
            {children}
        </div>
    )
}

export default MainLayout
