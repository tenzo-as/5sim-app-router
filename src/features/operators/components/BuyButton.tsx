import Button from '@/shared/components/Button'
import Image from '@/shared/components/Image'

type Props = {
    onClick?: () => void
}

export const BuyButton = ({ onClick }: Props) => (
    <Button
        variant={'contained'}
        size={40}
        square
        onClick={onClick}
    >
        <Image
            src={'/media/icons/buy.png'}
            alt={'Buy'}
            width={24}
            height={24}
        />
    </Button>
)