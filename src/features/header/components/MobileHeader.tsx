'use client'

import { HeaderProps } from '@/features/header/components/Header'
import { twMerge } from 'tailwind-merge'
import { Burger } from '@/features/header/components/tools/Burger'
import { useBoolean } from '@/shared/hooks/useBoolean'
import { LocaleSwitcher } from '@/features/header/components/tools/LocaleSwitcher'
import { ThemeSwitcher } from '@/features/header/components/tools/ThemeSwitcher'
import Button from '@/shared/components/Button'
import { useTranslations } from 'next-intl'

type Props = { className?: string } & HeaderProps

export const MobileHeader = ({
    className,
    locale,
    onChangeLocale,
    isLight,
    onToggleTheme,
}: Props) => {
    const isOpen = useBoolean()
    const t = useTranslations()

    return (
        <div className={twMerge('h-14 bg-header flex items-center justify-between pl-1', className)}>
            <Burger
                open={isOpen.value}
                onToggle={isOpen.toggle}
            />
            <div className={'flex items-center'}>
                <Button
                    color={'white'}
                    variant={'text'}
                    className={'py-1'}
                >
                    {t('header.signIn')}
                </Button>
                <Button
                    color={'white'}
                    variant={'outlined'}
                    className={'ml-1 py-1 max-[368px]:hidden'}
                >
                    {t('header.signUp')}
                </Button>
                <LocaleSwitcher
                    locale={locale}
                    onChangeLocale={onChangeLocale}
                    className={'ml-1'}
                />
            </div>
        </div>
    )
}