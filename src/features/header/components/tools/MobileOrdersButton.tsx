import { OrdersIcon } from '@/features/header/components/icons/OrdersIcon'
import Badge from '@/shared/components/Badge'
import Button from '@/shared/components/Button'

type Props = {
    className?: string
    activeOrdersCount?: number
}

export const MobileOrdersButton = ({ className, activeOrdersCount }: Props) => (
    <Badge badgeContent={activeOrdersCount} color={'warning'}>
        <Button circle variant={'text'} color={'white'} className={className}>
            <OrdersIcon />
        </Button>
    </Badge>
)
