import { MouseEventHandler, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    onClick?: MouseEventHandler<HTMLDivElement>
    children?: ReactNode
    size?: Size
}

export const GatewayCard = ({ onClick, size = 56, className, children }: Props) => (
    <div
        className={twMerge('flex items-center justify-between bg-white dark:bg-[#1e3044] hover:bg-[#e2f1fd] hover:dark:bg-[#2a3e52] cursor-pointer', twSize[size], className)}
        onClick={onClick}
    >
        {children}
    </div>
)

type Size = 56 | 64
const twSize: Record<Size, string> = {
    56: 'h-14',
    64: 'h-16',
}