import { OrdersIcon } from '@/features/header/icons/OrdersIcon'
import Badge from '@/shared/components/Badge'
import Button from '@/shared/components/Button'

type Props = {
    className?: string
    activeOrdersCount?: number
}

export const MobileOrdersButton = ({ className, activeOrdersCount }: Props) => (
    <Badge badgeContent={activeOrdersCount} color={'warning'} className={className}>
        <Button circle variant={'text'} color={'white'}>
            <OrdersIcon />
        </Button>
    </Badge>
)
