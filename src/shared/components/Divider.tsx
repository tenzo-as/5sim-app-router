import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

const Divider = ({ className }: Props) => (
    <hr className={twMerge('h-0.5 min-w-full border-none bg-divider', className)} />
)

export default Divider
