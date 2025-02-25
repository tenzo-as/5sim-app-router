import { Banner } from '@/features/sidebar/components/Banner'
import CountryFlag from '@/shared/components/CountryFlag'
import ServiceLogo from '@/shared/components/ServiceLogo'
import { PriceFrom } from '@/features/gateway/components/shared/PriceFrom'
import { Count } from '@/features/gateway/components/shared/Count'
import { Label } from '@/features/gateway/components/shared/Label'

type Props = {
    className?: string
}

const Sidebar = ({
    className,
}: Props) => {
    return (
        <div className={className}>
            <Banner />
            <CountryFlag countryId='russia' />
            <ServiceLogo serviceId='telegram' />
            <PriceFrom value={32} />
            <Count value={32}/>
            <Label>Russia</Label>
        </div>
    )
}

export default Sidebar