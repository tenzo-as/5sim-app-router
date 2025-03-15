import { MouseEventHandler, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    onClick?: MouseEventHandler<HTMLDivElement>
    children?: ReactNode
}

export const GatewayCard = ({ onClick, className, children }: Props) => (
    <div
        className={twMerge('flex items-center justify-between bg-white dark:bg-[#1e3044] hover:bg-[#e2f1fd] hover:dark:bg-[#2a3e52] h-14 cursor-pointer', className)}
        onClick={onClick}
    >
        {children}
    </div>
)