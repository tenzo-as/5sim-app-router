import type { MouseEventHandler, ReactNode } from 'react'

type Props = {
    className?: string
    children?: ReactNode
    onClick?: MouseEventHandler<HTMLLIElement>
}

export const MenuItem = ({ children, className, onClick }: Props) => {
    return (
        <li className={className} onClick={onClick}>
            {children}
        </li>
    )
}
