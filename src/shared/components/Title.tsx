import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    level: Level
    semibold?: boolean
    medium?: boolean
    bold?: boolean
    children?: ReactNode
}

const Title = ({
    className,
    level,
    semibold = true,
    medium = false,
    bold = false,
    children,
}: Props) => {
    const Component = level

    return (
        <Component
            className={twMerge(
                twLevel[level],
                semibold && 'font-semibold',
                medium && 'font-medium',
                bold && 'font-bold',
                className,
            )}
        >
            {children}
        </Component>
    )
}

export default Title

type Level = 'h1' | 'h2' | 'h3'
const twLevel: Record<Level, string> = {
    h1: 'text-3xl',
    h2: 'text-2xl',
    h3: 'text-xl',
}