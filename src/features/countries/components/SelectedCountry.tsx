import { Label } from '@/features/gateway/components/shared/Label'
import { countryNameBy } from '@/features/countries/utils/countryNameBy'
import { LOCALE, Locale } from '@/shared/constants/LOCALES'
import CountryFlag from '@/features/countries/components/CountryFlag'
import { GatewaySelectedCard } from '@/features/gateway/components/shared/GatewaySelectedCard'
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

const SelectedCountry = ({
    id,
    locale = LOCALE.en,
    onRemove,
    className,
}: Props) => {
    return (
        <GatewaySelectedCard className={className} onClick={onRemove}>
            <RemoveButton />
            <CountryFlag countryId={id} className={'ml-3 mr-2'}/>
            <Label className={'w-0 grow'}>{countryNameBy(id, locale)}</Label>
        </GatewaySelectedCard>
    )
}

export default SelectedCountry