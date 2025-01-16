import Button from '@/shared/components/Button'
import Menu from '@/shared/components/Menu'
import { FLAG_BY_LOCALE } from '@/shared/constants/FLAG_BY_LOCALE'
import { LOCALES, NAME_BY_LOCALE } from '@/shared/constants/LOCALES'
import { useBoolean } from '@/shared/hooks/useBoolean'
import { useIsClient } from '@/shared/hooks/useIsClient'
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside'
import { clsx } from 'clsx'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { HeaderProps } from '@/features/header/components/Header'

type Props = Pick<HeaderProps, 'locale' | 'onChangeLocale'>

export const LanguageSwitcher = ({
    locale,
    onChangeLocale,
}: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const t = useTranslations()
    const isOpen = useBoolean()
    const isClient = useIsClient()

    useOnClickOutside<HTMLDivElement>(ref, () => {
        isOpen.setFalse()
    })

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
                        alt={t('header.languageSelection')}
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
                <Menu.Title>{t('header.languageSelection')}</Menu.Title>
                {LOCALES.map(locale => (
                    <Menu.Item
                        key={locale}
                        onClick={() => onChangeLocale(locale)}
                    >
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
