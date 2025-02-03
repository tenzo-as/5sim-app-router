import Button from '@/shared/components/Button'
import { SupportIcon } from '@/shared/icons/SupportIcon'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

const SupportButton = ({ className }: Props) => {
    const t = useTranslations()

    return (
        <Button
            className={twMerge(
                'bg-[#b5f2ff] text-[#344a66] hover:bg-[#b5f2ff] hover:bg-opacity-90',
                className,
            )}
            fullWidth
            startIcon={SupportIcon}
        >
            {t('shared.support')}
        </Button>
    )
}

export default SupportButton
