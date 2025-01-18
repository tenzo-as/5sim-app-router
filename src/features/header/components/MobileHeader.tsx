import { HeaderProps } from '@/features/header/components/Header'
import { twMerge } from 'tailwind-merge'
import { Burger } from '@/features/header/components/tools/Burger'
import { useBoolean } from '@/shared/hooks/useBoolean'

type Props = { className?: string } & HeaderProps

export const MobileHeader = ({
    className,
}: Props) => {
    const isOpen = useBoolean()

    return (
        <div className={twMerge('flex', className)}>
            <Burger
                open={isOpen.value}
                onToggle={isOpen.toggle}
            />

        </div>
    )
}