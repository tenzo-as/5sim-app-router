import { Banner } from '@/features/sidebar/components/Banner'
import CountryFlag from '@/features/countries/components/CountryFlag'
import ServiceLogo from '@/features/services/components/ServiceLogo'
import { PriceFrom } from '@/features/gateway/components/shared/PriceFrom'
import { Count } from '@/features/gateway/components/shared/Count'
import { Label } from '@/features/gateway/components/shared/Label'
import Gateway from '@/features/gateway/components/Gateway'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

const Sidebar = ({
    className,
}: Props) => {
    return (
        <div className={twMerge('bg-[#f5f6f8] dark:bg-[#2e425b]', className)}>
            <Banner />
            <Gateway />
        </div>
    )
}

export default Sidebar