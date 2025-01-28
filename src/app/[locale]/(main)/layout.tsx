'use client'

import { ReactNode, useTransition } from 'react'
import Header from '@/features/header/components/Header'
import { useTheme } from '@/features/theme/hooks/useTheme'
import { useRouter } from '@/shared/hooks/useRouter'
import { usePathname } from '@/shared/hooks/usePathname'
import { useParams } from '@/shared/hooks/useParams'
import { Locale } from '@/shared/constants/LOCALES'
import { useLocale } from '@/shared/hooks/useLocale'

type Props = {
    children: ReactNode
}

const MainLayout = ({ children }: Props) => {
    const query = useParams()
    const locale = useLocale()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition();
    const router = useRouter()
    const { isLight, toggleTheme } = useTheme()

    const changeLocale = (locale: Locale) => {
        startTransition(() => {
            router.replace(
                { pathname, query },
                { locale }
            )
        })
    }

    return (
        <div className={''}>
            <Header
                locale={locale}
                onChangeLocale={locale => changeLocale(locale)}
                isLight={isLight}
                onToggleTheme={toggleTheme}
            />
            {children}
        </div>
    )
}

export default MainLayout