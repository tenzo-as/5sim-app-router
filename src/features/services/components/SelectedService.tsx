import ServiceLogo from '@/features/services/components/ServiceLogo'
import { StarIcon } from '@/shared/icons/StarIcon'
import { Label } from '@/features/gateway/components/shared/Label'
import { serviceNameBy } from '@/features/services/utils/serviceNameBy'
import { LOCALE, Locale } from '@/shared/constants/LOCALES'
import { GatewayPaper } from '@/features/gateway/components/shared/GatewayPaper'
import { CgClose } from 'react-icons/cg'
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
        <GatewayPaper className={className} onClick={onRemove}>
            <div className={'flex items-center ml-3 mr-2'}>
                <RemoveButton />
                <ServiceLogo serviceId={id} className={'ml-[6px] mr-[10px]'}/>
                <Label>{serviceNameBy(id, locale)}</Label>
            </div>
        </GatewayPaper>
    )
}

export default SelectedService