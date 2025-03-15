import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { GatewayCard } from '@/features/gateway/components/shared/GatewayCard'

type Props = {
    className?: string
    onClick?: () => void
    children?: ReactNode
}

export const GatewaySelectedCard = ({ onClick, className, children }: Props) => (
    <GatewayCard
        className={twMerge('h-12 px-4 justify-start rounded-[20px] text-[#42a5f5] [&>p]:font-medium', className)}
        onClick={onClick}
    >
        {children}
    </GatewayCard>
)