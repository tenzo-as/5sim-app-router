import { twMerge } from 'tailwind-merge'
import { useTranslations } from 'next-intl'
import { LogoIcon } from '@/features/sidebar/icons/LogoIcon'
import TelegramButton from '@/shared/components/TelegramButton'

export const Banner = () => {
    const t = useTranslations()

    return (
        <div
            className={twMerge(
                'flex items-center justify-start lg:justify-between xl:justify-start h-[88px]',
                'text-white bg-[#1976d2]',
                'rounded-b-2xl xl:rounded-t-3xl',
                'px-4 sm:px-6 lg:p-[0_80px_0_56px]',
            )}
        >
            <div className={'flex items-center'}>
                <LogoIcon className={'w-[66px] h-10'} />
                <h2 className={'ml-4 font-semibold text-base'}>
                    {t.rich('sidebar.cover', {
                        span: children => <span className={'block text-[17px] min-[338px]:text-lg min-[360px]:text-xl'}>{children}</span>
                    })}
                </h2>
            </div>
            <div className={'hidden items-center lg:flex xl:hidden ml-auto'}>
                <TelegramButton.NewNumbers />
                <TelegramButton.NewsAndStocks />
            </div>
        </div>
    )
}

