import Badge from '@/shared/components/Badge'
import Button from '@/shared/components/Button'
import { useTranslations } from 'next-intl'

type Props = {
    className?: string
    activeOrdersCount?: number
}

export const DesktopOrdersButton = ({ className, activeOrdersCount }: Props) => {
    const t = useTranslations('header')

    return (
        <Badge badgeContent={activeOrdersCount} color={'warning'} className={className}>
            <Button variant={'text'} color={'white'}>
                {t('partner')}
            </Button>
        </Badge>
    )
}

