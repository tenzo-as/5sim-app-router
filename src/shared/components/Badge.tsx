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
    if (!badgeContent || badgeContent === 0) return children

    return (
        <div className={twMerge('relative', className)}>
            <span
                className={clsx(
                    'z-10 badge absolute -top-0.5 -right-0.5 py-0 px-[6px] text-[12px] font-semibold',
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