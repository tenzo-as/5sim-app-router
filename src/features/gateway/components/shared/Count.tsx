import { useTranslations } from "next-intl"
import { formatNumberWithSeparator } from "@/features/sidebar/utils/formatNumberWithSeparator"
import { twMerge } from "tailwind-merge"

type Props = {
    value?: number
    className?: string,
}

export const Count = ({ value, className }: Props) => {
    const t = useTranslations()

    if (value === undefined) {
        return <span className={twMerge('skeleton w-20 h-3', className)} />
    }

    return (
        <span
            className={twMerge(
                'text-medium truncate text-xs leading-none',
                getColor(value),
                className,
            )}
        >
            {t.rich('gateway.count', {
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