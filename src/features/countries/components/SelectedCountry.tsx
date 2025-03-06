import { Label } from '@/features/gateway/components/shared/Label'
import { countryNameBy } from '@/features/countries/utils/countryNameBy'
import { LOCALE, Locale } from '@/shared/constants/LOCALES'
import CountryFlag from '@/features/countries/components/CountryFlag'
import { GatewayPaper } from '@/features/gateway/components/shared/GatewayPaper'
import RemoveButton from '@/features/gateway/components/shared/RemoveButton'

type Props = {
    isFavorite?: boolean
    id: string
    locale?: Locale
    priceFrom?: number
    count?: number
    onRemove?: () => void
    onToggleFavorite?: () => void
    className?: string
}

const Country = ({
    id,
    locale = LOCALE.en,
    onRemove,
    className,
}: Props) => {
    return (
        <GatewayPaper className={className} onClick={onRemove}>
            <div className={'flex items-center ml-3 mr-2'}>
                <RemoveButton />
                <CountryFlag countryId={id} className={'ml-[6px] mr-[10px]'}/>
                <Label>{countryNameBy(id, locale)}</Label>
            </div>
        </GatewayPaper>
    )
}

export default Country