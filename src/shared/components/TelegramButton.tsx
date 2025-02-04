import BaseButton from '@/shared/components/Button'
import { PaperAirplaneIcon } from '@/shared/icons/PaperAirplaneIcon'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'

type Props = { className?: string }

const NewNumbers = ({ className }: Props) => {
    const t = useTranslations()

    return (
        <Button href={''} className={className}>
            {t('shared.telegram.newNumbers')}
        </Button>
    )
}

const NewsAndStocks = ({ className }: Props) => {
    const t = useTranslations()

    return (
        <Button href={''} className={className}>
            {t('shared.telegram.newsAndStocks')}
        </Button>
    )
}

type ButtonProps = {
    href: string
    children: ReactNode
    className?: string
}

const Button = ({ href, className, children }: ButtonProps) => (
    <BaseButton
        fullWidth={true}
        variant={'outlined'}
        startIcon={
            <PaperAirplaneIcon
                className={'size-[22px] rounded-full bg-primary p-[3px] text-white'}
            />
        }
        component={'a'}
        href={href}
        size={44}
        openInNewTab
        className={className}
    >
        {children}
    </BaseButton>
)

const TelegramButton = {
    NewNumbers,
    NewsAndStocks,
}

export default TelegramButton
