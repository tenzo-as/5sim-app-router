import { CSSProperties, ReactNode } from 'react'

type Props = {
    style: CSSProperties
    children: ReactNode
}

export const VirtualizedListItemWrapper = ({ style, children }: Props) => (
    <div className={'h-[58px] py-px'} style={style}>{children}</div>
)

