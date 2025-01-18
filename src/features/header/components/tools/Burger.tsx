import Button from '@/shared/components/Button'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

type Props = {
    open: boolean
    onToggle?: () => void
}

export const Burger = ({
    open,
    onToggle,
}: Props) => {
    return (
        <Button
            square
            variant={'text'}
            onClick={onToggle}
            size={48}
            className={'flex flex-col items-center justify-center'}
        >
            <div className={twMerge(base, clsx(open && 'rotate-45 translate-y-[6px]'))}/>
            <div className={twMerge(base, 'my-[4px] duration-200', clsx(open && 'w-0'))}/>
            <div className={twMerge(base, clsx(open && '-rotate-45 -translate-y-[6px]'))}/>
        </Button>
    )
}

const base = 'w-[18px] h-[2px] bg-white rounded-[1px] transition-all duration-300'