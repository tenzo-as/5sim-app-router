import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    inline?: boolean
    children?: ReactNode
    medium?: boolean
    semibold?: boolean
    bold?: boolean
}

const Text = ({
    className,
    children,
    inline = false,
    medium = false,
    semibold = false,
    bold = false,
}: Props) => {
    const Component = inline ? 'span' : 'p'

    return (
        <Component
            className={twMerge(
                'font',
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
