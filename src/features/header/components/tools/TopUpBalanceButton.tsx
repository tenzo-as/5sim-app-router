import { RubleIcon } from '@/features/header/icons/RubleIcon'
import { WalletIcon } from '@/features/header/icons/WalletIcon'
import Button from '@/shared/components/Button'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    balance: number
}

export const TopUpBalanceButton = ({ balance, className }: Props) => {
    return (
        <Button
            color={'white'}
            variant={'text'}
            startIcon={<WalletIcon />}
            slotProps={{
                startIconWrapperProps: { className: 'max-[350px]:hidden text-[#b5f2ff]' },
            }}
            endIcon={<RubleIcon />}
            endGap={4}
            className={twMerge('px-3', className)}
        >
            {balance}
        </Button>
    )
}
