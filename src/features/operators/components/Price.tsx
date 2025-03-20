import { RubleIcon } from '@/shared/icons/RubleIcon'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    value?: number
    className?: string,
}

export const Price = ({ value, className }: Props) => {
    return (
        <div className={twMerge('inline-flex items-center', className)}>
            <span className="font-semibold text-xl leading-6">
                {value}
            </span>
            <RubleIcon className="ml-1" size={20} />
        </div>
    )
}
