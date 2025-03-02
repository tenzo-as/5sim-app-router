import Button from '@/shared/components/Button'
import { useTranslations } from 'next-intl'

type Props = {
    expanded: boolean
    onToggle: () => void
    count: number
}

const ExpandListButton = ({
    expanded = false,
    onToggle,
    count,
}: Props) => {
    const t = useTranslations()

    return (
        <Button
            variant={'text'}
            color={'info'}
            onClick={onToggle}
        >
            {expanded ? 'Свернуть список' : `Показать все ${count}`}
        </Button>
    )
}

export default ExpandListButton