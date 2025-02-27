import { Banner } from '@/features/sidebar/components/Banner'
import CountryFlag from '@/features/countries/components/CountryFlag'
import ServiceLogo from '@/features/services/components/ServiceLogo'
import { PriceFrom } from '@/features/gateway/components/shared/PriceFrom'
import { Count } from '@/features/gateway/components/shared/Count'
import { Label } from '@/features/gateway/components/shared/Label'
import ServicesSelection from '@/features/services/components/ServicesSelection'

type Props = {
    className?: string
}

const Sidebar = ({
    className,
}: Props) => {
    return (
        <div className={className}>
            <Banner />
            <ServicesSelection />
            <CountryFlag countryId='russia' />
            <ServiceLogo serviceId='telegram' />
            <PriceFrom value={32} />
            <Count value={32}/>
            <Label>Russia</Label>
        </div>
    )
}

export default Sidebar