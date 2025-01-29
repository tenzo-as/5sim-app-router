import type { MouseEventHandler, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    children?: ReactNode
    onClick?: MouseEventHandler<HTMLLIElement>
}

export const MenuItem = ({ children, className, onClick }: Props) => {
    return (
        <li className={twMerge('font-medium', className)} onClick={onClick}>
            {children}
        </li>
    )
}
