import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    children?: ReactNode
}

const Main = ({ className, children }: Props) => (
    <div className={twMerge('bg-white dark:bg-[#1e2e3e] py-16 px-6', className)}>
        {children}
    </div>
)

export default Main
