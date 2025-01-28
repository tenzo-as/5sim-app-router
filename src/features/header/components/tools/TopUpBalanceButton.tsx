import Button from '@/shared/components/Button'
import { RubleIcon } from '@/features/header/components/icons/RubleIcon'
import { WalletIcon } from '@/features/header/components/icons/WalletIcon'

type Props = {
    className?: string
    balance: number
}

export const TopUpBalanceButton = ({
    balance,
    className,
}: Props) => {
    return (
        <Button
            color={'white'}
            variant={'text'}
            startIcon={<WalletIcon />}
            endIcon={<RubleIcon />}
            className={className}
        >
            {balance}
        </Button>
    )
}