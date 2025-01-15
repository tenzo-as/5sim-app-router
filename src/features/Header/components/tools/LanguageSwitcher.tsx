import Button from '@/shared/components/Button'
import Menu from '@/shared/components/Menu'
import { FLAG_BY_LOCALE } from '@/shared/constants/FLAG_BY_LOCALE'
import { Locale, LOCALES, NAME_BY_LOCALE } from '@/shared/constants/LOCALES'
import { useBoolean } from '@/shared/hooks/useBoolean'
import { useIsClient } from '@/shared/hooks/useIsClient'
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside'
import { usePathname } from '@/shared/hooks/usePathname'
import { useRouter } from '@/shared/hooks/useRouter'
import { clsx } from 'clsx'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { useLocale } from 'use-intl'

export const LanguageSwitcher = () => {
    const ref = useRef<HTMLDivElement>(null)
    const t = useTranslations()
    const locale = useLocale() as Locale
    const pathname = usePathname()
    const router = useRouter()
    const isOpen = useBoolean()
    const isClient = useIsClient()

    useOnClickOutside<HTMLDivElement>(ref, () => {
        isOpen.setFalse()
    })

    const changeLocale = (locale: Locale) => {
        router.replace(pathname, { locale })
    }

    return (
        <div className={'relative'} ref={ref}>
            <Button
                color={'white'}
                variant={'text'}
                className={'gap-2 px-3'}
                endIcon={<FaChevronDown className={'size-3'} />}
                onClick={isOpen.toggle}
            >
                {isClient ? (
                    <img
                        className={'size-[26px] rounded-full'}
                        src={FLAG_BY_LOCALE[locale]}
                        alt={'Language Switcher'}
                    />
                ) : (
                    <div
                        className={'skeleton size-[26px] rounded-full'}
                        style={{ animationDuration: '500ms' }}
                    />
                )}
            </Button>
            <Menu
                className={clsx(
                    'absolute right-3 top-[calc(100%+8px)] lg:right-0',
                    !isOpen.value && 'hidden',
                )}
            >
                <Menu.Title>Выбор языка {t('HomePage.title')}</Menu.Title>
                {LOCALES.map(locale => (
                    <Menu.Item key={locale} onClick={() => changeLocale(locale)}>
                        <img
                            className={'size-[24px] rounded-full'}
                            src={FLAG_BY_LOCALE[locale]}
                            alt={NAME_BY_LOCALE[locale]}
                        />
                        {NAME_BY_LOCALE[locale]}
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    )
}
