import ServiceLogo from '@/features/services/components/ServiceLogo'
import { Label } from '@/features/gateway/components/shared/Label'
import { serviceNameBy } from '@/features/services/utils/serviceNameBy'
import { LOCALE, Locale } from '@/shared/constants/LOCALES'
import { GatewaySelectedCard } from '@/features/gateway/components/shared/GatewaySelectedCard'
import RemoveButton from '@/features/gateway/components/shared/RemoveButton'

export type SelectedServiceProps = {
    id: string
    locale?: Locale
    className?: string
    onRemove?: () => void
}

const SelectedService = ({
    id,
    locale = LOCALE.en,
    className,
    onRemove,
}: SelectedServiceProps) => {
    return (
        <GatewaySelectedCard className={className} onClick={onRemove}>
            <RemoveButton />
            <ServiceLogo serviceId={id} className={'ml-3 mr-2'} />
            <Label className={'w-0 grow'}>{serviceNameBy(id, locale)}</Label>
        </GatewaySelectedCard>
)
}

export default SelectedService