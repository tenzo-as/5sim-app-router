import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    badgeContent?: ReactNode
    children?: ReactNode
    color?: Color
}

const Badge = ({
    className,
    badgeContent,
    color = 'base',
    children,
}: Props) => {
    if (!badgeContent) return children

    return (
        <div className={twMerge('relative', className)}>
            <span
                className={clsx(
                    'badge absolute -top-1 -right-1 py-0 px-[6px]',
                    twColor[color],
                )}
            >
                {typeof badgeContent === 'number'
                    ? badgeContent > 99 ? '+99' : badgeContent
                    : badgeContent
                }
            </span>
            {children}
        </div>
    )
}

export default Badge

type Color = 'base' | 'warning'
const twColor: Record<Color, string> = {
    'base': '',
    'warning': 'badge-warning',
}