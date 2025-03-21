import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    size?: Size
    inline?: boolean
    medium?: boolean
    semibold?: boolean
    bold?: boolean
    children?: ReactNode
}

const Text = ({
    className,
    size = 16,
    inline = false,
    medium = false,
    semibold = false,
    bold = false,
    children,
}: Props) => {
    const Component = inline ? 'span' : 'p'

    return (
        <Component
            className={twMerge(
                twSize[size],
                inline ? 'inline-block' : 'block',
                medium && 'font-medium',
                semibold && 'font-semibold',
                bold && 'font-bold',
                className,
            )}
        >
            {children}
        </Component>
    )
}

export default Text

type Size = 14 | 16 | 18 | 20 | 24
const twSize: Record<Size, string> = {
    14: 'text-sm',
    16: 'text-base',
    18: 'text-lg',
    20: 'text-xl',
    24: 'text-2xl',
}