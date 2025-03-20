import Button from '@/shared/components/Button'
import { useTranslations } from 'next-intl'
import { FaChevronDown } from 'react-icons/fa'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

type Props = {
    expanded: boolean
    onToggle: () => void
    count: number
    className?: string
}

const ExpandListButton = ({
    expanded = false,
    onToggle,
    count,
    className,
}: Props) => {
    const t = useTranslations()

    return (
        <Button
            variant={'text'}
            color={'primary'}
            onClick={onToggle}
            fullWidth
            disableShadow
            className={twMerge('font-medium', className)}
            size={32}
            endIcon={<FaChevronDown className={clsx('transition-transform duration-200', expanded && 'rotate-x-180')} />}
        >
            {expanded ? 'Свернуть список' : `Показать все ${count}`}
        </Button>
    )
}

export default ExpandListButton