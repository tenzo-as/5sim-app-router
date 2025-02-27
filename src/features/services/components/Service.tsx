import ServiceLogo from '@/features/services/components/ServiceLogo'
import { StarIcon } from '@/shared/icons/StarIcon'
import { Label } from '@/features/gateway/components/shared/Label'
import { serviceNameBy } from '@/features/services/utils/serviceNameBy'
import { LOCALE, Locale } from '@/shared/constants/LOCALES'
import { PriceFrom } from '@/features/gateway/components/shared/PriceFrom'
import { Count } from '@/features/gateway/components/shared/Count'
import { GatewayPaper } from '@/features/gateway/components/shared/GatewayPaper'

export type ServiceProps = {
    isFavorite?: boolean
    id: string
    locale?: Locale
    priceFrom?: number
    count?: number
    className?: string
    onSelect?: () => void
    onToggleFavorite?: () => void
}

const Service = ({
    isFavorite,
    id,
    locale = LOCALE.en,
    priceFrom,
    count,
    className,
    onSelect,
    onToggleFavorite,
}: ServiceProps) => {
    return (
        <GatewayPaper className={className} onClick={onSelect}>
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
        </GatewayPaper>
    )
}

export default Service