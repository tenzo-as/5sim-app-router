import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

const Spinner = ({ className }: Props) => (
    <span className={twMerge('loading loading-spinner', className)} />
)

export default Spinner
