import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

const Divider = ({ className }: Props) => (
    <hr
        className={twMerge(
            'border-none h-0.5 min-w-full bg-divider',
            className
        )}
    />
)

export default Divider