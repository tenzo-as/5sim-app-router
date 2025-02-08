import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import Image from '@/shared/components/Image'
import { serviceNameBy } from '@/shared/utils/serviceNameBy'
import { useLocale } from '@/shared/hooks/useLocale'
import '@/shared/components/ServiceLogo/ServiceLogo.css'

type Props = {
    className?: string
    serviceId: string
}

export const ServiceLogo = ({
    serviceId,
    className,
}: Props) => {
    const t = useTranslations()
    const locale = useLocale()

    return (
        <div className={twMerge('overflow-hidden relative size-6 min-w-0 min-h-0 rounded-full', className)}>
            <Image
                src={'/media/sprites/services.png'}
                alt={t('alt.serviceLogo', { serviceName: serviceNameBy(serviceId, locale) })}
            />
        </div>
    )
}
