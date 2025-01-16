import { HeaderProps } from '@/features/header/components/Header'
import { twMerge } from 'tailwind-merge'

type Props = { className?: string } & HeaderProps

export const MobileHeader = ({ className }: Props) => {
    return (
        <div className={twMerge('flex', className)}>

        </div>
    )
}