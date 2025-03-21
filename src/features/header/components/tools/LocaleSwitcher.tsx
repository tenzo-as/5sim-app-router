'use client'

import { HeaderProps } from '@/features/header/components/Header'
import Button from '@/shared/components/Button'
import Image from '@/shared/components/Image'
import Menu from '@/shared/components/Menu'
import { Locale, LOCALES, NAME_BY_LOCALE } from '@/shared/constants/LOCALES'
import { useBoolean } from '@/shared/hooks/useBoolean'
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside'
import { clsx } from 'clsx'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
} & Pick<HeaderProps, 'locale' | 'onChangeLocale'>

export const LocaleSwitcher = ({ locale: currentLocale, onChangeLocale, className }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const t = useTranslations('header')
    const isOpen = useBoolean()

    useOnClickOutside<HTMLDivElement>(ref, isOpen.setFalse)

    return (
        <div className={twMerge('relative', className)} ref={ref}>
            <Button
                color={'white'}
                variant={'text'}
                className={'px-3'}
                endIcon={<FaChevronDown className={clsx('size-3 transition-transform', isOpen.value && 'rotate-x-180')} />}
                onClick={isOpen.toggle}
            >
                <Image
                    className={'size-[26px] rounded-full'}
                    src={flagByLocale[currentLocale]}
                    alt={t('languageSelection')}
                    width={24}
                    height={24}
                />
            </Button>
            <Menu
                className={clsx(
                    'absolute right-3 top-[calc(100%+8px)] lg:right-0',
                    !isOpen.value && 'hidden',
                )}
            >
                <Menu.Title>{t('languageSelection')}</Menu.Title>
                {LOCALES.map(locale => (
                    <Menu.Item
                        key={locale}
                        onClick={() => {
                            if (locale !== currentLocale) isOpen.setFalse()

                            if (onChangeLocale) onChangeLocale(locale)
                        }}
                    >
                        <div className={clsx(locale === currentLocale && 'active')}>
                            <Image
                                className={'size-[24px] rounded-full'}
                                src={flagByLocale[locale]}
                                alt={NAME_BY_LOCALE[locale]}
                                width={24}
                                height={24}
                            />
                            {NAME_BY_LOCALE[locale]}
                        </div>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    )
}

const flagByLocale: Record<Locale, string> = {
    en: '/media/locales/en.svg',
    ru: '/media/locales/ru.svg',
    zh: '/media/locales/zh.svg',
}
