import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    children?: string
}

export const Label = ({ className, children }: Props) => (
    <p className={twMerge('truncate font-semibold', className)}>{children}</p>
)
