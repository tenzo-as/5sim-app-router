import { StarIcon } from '@/shared/icons/StarIcon'
import { Label } from '@/features/gateway/components/shared/Label'
import { countryNameBy } from '@/features/countries/utils/countryNameBy'
import { LOCALE, Locale } from '@/shared/constants/LOCALES'
import { PriceFrom } from '@/features/gateway/components/shared/PriceFrom'
import { Count } from '@/features/gateway/components/shared/Count'
import { clsx } from 'clsx'
import CountryFlag from '@/features/countries/components/CountryFlag'
import { GatewayPaper } from '@/features/gateway/components/shared/GatewayPaper'

type Props = {
    isFavorite?: boolean
    id: string
    locale?: Locale
    priceFrom?: number
    count?: number
    onSelect?: () => void
    onToggleFavorite?: () => void
    className?: string
}

const Country = ({
    isFavorite,
    id,
    locale = LOCALE.en,
    priceFrom,
    count,
    onSelect,
    onToggleFavorite,
    className,
}: Props) => {
    return (
        <GatewayPaper className={className} onClick={onSelect}>
            <div className={'flex items-center ml-3 mr-2'}>
                <StarIcon
                    enabled={isFavorite}
                    className={'size-8 p-[6px]'}
                    onClick={onToggleFavorite}
                />
                <CountryFlag countryId={id} className={'ml-[6px] mr-[10px]'}/>
                <Label>{countryNameBy(id, locale)}</Label>
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
        </GatewayPaper>
    )
}

export default Country