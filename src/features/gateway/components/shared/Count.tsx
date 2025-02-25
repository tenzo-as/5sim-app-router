import { useTranslations } from "next-intl"
import { formatNumberWithSeparator } from "../../../sidebar/utils/formatNumberWithSeparator"
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
                'text-medium text-xs truncate leading-none',
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
        ? 'text-[#00c036]'
        : (
            count > 0
                ? 'text-[#e13a3a]'
                : 'text-[#395372]'
        )
)