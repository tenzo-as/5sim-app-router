import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    children?: ReactNode
}

export const MenuTitle = ({ className, children }: Props) => (
    <li className={twMerge('menu-title', className)}>{children}</li>
)
