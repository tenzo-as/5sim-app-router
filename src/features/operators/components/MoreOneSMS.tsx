import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

export const MoreOneSMS = ({ className }: Props) => (
    <div className={twMerge('text-bold leading-none text-[10px] px-[3px] h-4 tracking-[0.1px] text-[#395372] dark:text-[#e2f1fd] rounded border border-solid border-[#0000001f] dark:border-[#395372]', className)}>
        {'>'}1 SMS
    </div>
)