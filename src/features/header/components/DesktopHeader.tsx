import { AuthToolbar } from '@/features/header/components/toolbar/AuthToolbar'
import { NotAuthToolbar } from '@/features/header/components/toolbar/NotAuthToolbar'
import { HeaderProps } from '@/features/header/components/Header'
import { twMerge } from 'tailwind-merge'

type Props = {
    className: string
} & HeaderProps

export const DesktopHeader = ({
    className,
}: Props) => {
    return (
        <div className={twMerge('flex h-14 items-center bg-[#395372] px-1 lg:px-6', className)}>
            <NotAuthToolbar />
            <AuthToolbar />
        </div>
    )
}
