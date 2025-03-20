import Image from '@/shared/components/Image'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

export const RateIcon = ({ className }: Props) => (
    <Image
        src={'/media/icons/rate.png'}
        width={16}
        height={16}
        alt={'Rate'}
        className={twMerge('min-w-4', className)}
    />
)