import BaseButton from '@/shared/components/Button'
import { PaperAirplaneIcon } from '@/shared/icons/PaperAirplaneIcon'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = { className?: string, fullWidth?: boolean }

const NewNumbers = ({ className, fullWidth }: Props) => {
    const t = useTranslations('shared.telegram')

    return (
        <Button
            href={''}
            className={className}
            fullWidth={fullWidth}
        >
            {t('newNumbers')}
        </Button>
    )
}

const NewsAndStocks = ({ className, fullWidth }: Props) => {
    const t = useTranslations('shared.telegram')

    return (
        <Button
            href={''}
            className={className}
            fullWidth={fullWidth}
        >
            {t('newsAndStocks')}
        </Button>
    )
}

type ButtonProps = {
    fullWidth?: boolean
    href: string
    children: ReactNode
    className?: string
}

const Button = ({ href, className, children, fullWidth = true }: ButtonProps) => (
    <BaseButton
        fullWidth={fullWidth}
        variant={'contained'}
        color={'white'}
        startIcon={
            <PaperAirplaneIcon
                className={'size-[22px] rounded-full bg-primary p-[3px] text-white'}
            />
        }
        component={'a'}
        href={href}
        size={44}
        openInNewTab
        className={twMerge('border-2', className)}
    >
        {children}
    </BaseButton>
)

const TelegramButton = {
    NewNumbers,
    NewsAndStocks,
}

export default TelegramButton
