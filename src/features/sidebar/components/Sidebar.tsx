import { Banner } from '@/features/sidebar/components/Banner'
import CountryFlag from '@/shared/components/CountryFlag'
import ServiceLogo from '@/shared/components/ServiceLogo'
import { PriceFrom } from '@/features/sidebar/components/atoms/PriceFrom'

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
        </div>
    )
}

export default Sidebar