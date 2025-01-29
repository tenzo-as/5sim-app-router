import Button from '@/shared/components/Button'
import { OrdersIcon } from '@/features/header/components/icons/OrdersIcon'
import Badge from '@/shared/components/Badge'

type Props = {
    className?: string
    badge?: number
}

export const MobileOrdersButton = ({ className, badge }: Props) => (
    <Badge badgeContent={badge}>
        <Button
            circle
            variant={'text'}
            color={'white'}
            className={className}
        >
            <OrdersIcon />
        </Button>
    </Badge>

)