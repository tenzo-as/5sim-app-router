import { MenuItem } from '@/shared/components/Menu/MenuItem'
import { MenuTitle } from '@/shared/components/Menu/MenuTitle'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    children?: ReactNode
}

const Menu = ({ className, children }: Props) => {
    return (
        <ul
            className={twMerge(
                'menu z-10 min-w-56 rounded-2xl bg-base-300 shadow [&>li>*]:gap-3',
                className,
            )}
        >
            {children}
        </ul>
    )
}

Menu.Item = MenuItem
Menu.Title = MenuTitle

export { Menu }
