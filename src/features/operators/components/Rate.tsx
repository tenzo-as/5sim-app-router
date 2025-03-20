import { twMerge } from 'tailwind-merge'
import { RateIcon } from '@/features/operators/icons/RateIcon'

type Props = {
    className?: string
    value?: number
}

export const Rate = ({ value, className }: Props) => {
    const isNumber = typeof value === 'number'

    return (
        <div className={twMerge('flex items-center', className)}>
            <RateIcon className={'mr-1'} />
            <span className={'text-xs font-semibold text-[#395372] dark:text-[#e2f1fd] lowercase'}>
                {isNumber ? `${value}%` : 'n/a'}
            </span>
        </div>
    )
}