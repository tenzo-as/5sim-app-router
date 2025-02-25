import { RubleIcon } from "@/shared/icons/RubleIcon"
import { useTranslations } from "next-intl"
import { twMerge } from "tailwind-merge"

type Props = {
    value: number,
    className?: string,
}

export const PriceFrom = ({
    value,
    className,
}: Props) => {
    const t = useTranslations()

    return (
        <div className={twMerge('inline-flex items-center [&>span:first-child]:mr-1  [&>span:last-child]:ml-1', className)}>
            {t.rich('sidebar.priceFrom', {
                from: children => (
                    <span className={'text-xs font-medium'}>
                        {children}
                    </span>
                ),
                chip: children => (
                    <div className="inline-flex items-center pl-2 pr-1 h-6 rounded-xl text-base bg-[#f5f6f8] p-1 dark:bg-[#2e425b]">
                        <span className="font-semibold">
                            {children}
                        </span>
                        <RubleIcon className="ml-1" />
                    </div>
                ),
                value,
            })}
        </div>
    )
}