import ServiceLogo from '@/shared/components/ServiceLogo'
import { StarIcon } from '@/shared/icons/StarIcon'
import { Label } from '@/features/gateway/components/shared/Label'
import { serviceNameBy } from '@/shared/utils/serviceNameBy'
import { LOCALE, Locale } from '@/shared/constants/LOCALES'
import { twMerge } from 'tailwind-merge'
import { PriceFrom } from '@/features/gateway/components/shared/PriceFrom'
import { Count } from '@/features/gateway/components/shared/Count'
import { clsx } from 'clsx'
import CountryFlag from '@/shared/components/CountryFlag'

type Props = {
    isFavorite?: boolean
    id: string
    locale?: Locale
    priceFrom?: number
    count?: number
    className?: string
}

export const Country = ({
    isFavorite,
    id,
    locale = LOCALE.en,
    priceFrom,
    count,
    className,
}: Props) => {
    return (
        <div className={twMerge('flex items-center justify-between bg-white dark:bg-[#1e3044] h-14', className)}>
            <div className={'flex items-center ml-3 mr-2'}>
                <StarIcon enabled={isFavorite} className={'size-8 p-[6px]'} />
                <CountryFlag countryId={id} className={'ml-[6px] mr-[10px]'}/>
                <Label>{serviceNameBy(id, locale)}</Label>
            </div>
            <div
                className={clsx(
                    'flex flex-col items-end justify-center mr-4',
                    (priceFrom === undefined || count === undefined) && 'hidden',
                )}
            >
                <PriceFrom value={priceFrom || 0} />
                <Count value={count || 0} className={'mt-1'} />
            </div>
        </div>
    )
}