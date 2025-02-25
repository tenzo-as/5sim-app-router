import { useTranslations } from "next-intl"
import { formatNumberWithSeparator } from "../../utils/formatNumberWithSeparator"
import { twMerge } from "tailwind-merge"

type Props = {
    value: number
    className?: string,
}

export const Count = ({ value, className }: Props) => {
    const t = useTranslations()

    return (
        <span 
            className={twMerge(
                'text-medium text-xs truncate',
                getColor(value), 
                className,
            )}
        >
            {t.rich('sidebar.count', { 
                span: chunks => (
                    formatNumberWithSeparator(
                        Number(chunks)
                    )
                ),
                value,
            })}
        </span>
    )
}

const getColor = (count: number) => (
    count > 9 
        ? 'text-green-400'
        : (
            count > 0
                ? 'text-red-400'
                : 'text-gray-400'
        )
)