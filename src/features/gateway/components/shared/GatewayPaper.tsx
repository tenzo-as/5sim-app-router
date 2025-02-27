import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    onClick?: () => void
    children?: ReactNode
}

export const GatewayPaper = ({ onClick, className, children }: Props) => (
    <div
        className={twMerge('flex items-center justify-between bg-white dark:bg-[#1e3044] h-14 cursor-pointer', className)}
        onClick={onClick}
    >
        {children}
    </div>
)