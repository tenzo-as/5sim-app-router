import ServiceLogo from '@/shared/components/ServiceLogo'
import { StarIcon } from '@/shared/icons/StarIcon'
import { Label } from '@/features/gateway/components/shared/Label'
import { serviceNameBy } from '@/shared/utils/serviceNameBy'
import { LOCALE, Locale } from '@/shared/constants/LOCALES'
import { twMerge } from 'tailwind-merge'
import { PriceFrom } from '@/features/gateway/components/shared/PriceFrom'
import { Count } from '@/features/gateway/components/shared/Count'
import { CSSProperties } from 'react'

export type ServiceProps = {
    isFavorite?: boolean
    id: string
    locale?: Locale
    priceFrom: number
    count: number
    className?: string
    style?: CSSProperties
    onSelect?: () => void
    onToggleFavorite?: () => void
}

export const Service = ({
    isFavorite,
    id,
    locale = LOCALE.en,
    priceFrom,
    count,
    className,
    onSelect,
    onToggleFavorite,
    style,
}: ServiceProps) => {
    return (
        <div
            className={twMerge('flex items-center justify-between bg-white dark:bg-[#1e3044] h-14', className)}
            style={style}
            onClick={onSelect}
        >
            <div className={'flex items-center ml-3 mr-2'}>
                <StarIcon
                    enabled={isFavorite}
                    className={'size-8 p-[6px]'}
                    onClick={onToggleFavorite}
                />
                <ServiceLogo serviceId={id} className={'ml-[6px] mr-[10px]'}/>
                <Label>{serviceNameBy(id, locale)}</Label>
            </div>
            <div className={'flex flex-col items-end justify-center mr-4'}>
                <PriceFrom value={priceFrom} />
                <Count value={count} className={'mt-1'} />
            </div>
        </div>
    )
}