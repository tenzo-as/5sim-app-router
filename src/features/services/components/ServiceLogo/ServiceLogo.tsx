import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import Image from '@/shared/components/Image'
import { serviceNameBy } from '@/features/services/utils/serviceNameBy'
import { useLocale } from '@/shared/hooks/useLocale'
import './ServiceLogo.css'

type Props = {
    className?: string
    serviceId: string
    size?: Size
}

export const ServiceLogo = ({
    serviceId,
    className,
    size = 24,
}: Props) => {
    const t = useTranslations('services')
    const locale = useLocale()

    return (
        <div 
            className={twMerge(
                'overflow-hidden relative min-h-0 rounded-full',
                twSize[size],
                className,
            )}
        >
            <Image
                src={'/media/sprites/blank.gif'}
                alt={t('logoAlt', { serviceName: serviceNameBy(serviceId, locale) })}
                className={twMerge(
                    `services services-${serviceId}`,
                    'absolute inset-1/2 -translate-x-1/2 -translate-y-1/2',
                )}
                width={size}
                height={size}
            />
        </div>
    )
}

type Size = 24

const twSize: Record<Size, string> = {
    24: 'size-6 min-w-6',
}
