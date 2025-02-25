import memoize from 'memoize-one'
import { FixedSizeList, areEqual } from 'react-window'
import { CSSProperties, memo } from 'react'
import { Service } from '@/features/gateway/components/directions/Service'

const height = 56

type Props = {
    list: []
}

export const Services = ({ list }: Props) => {
    const itemData = createItemData(list, onSelect, onToggleFavorite)

    return (
        <FixedSizeList
            height={height * 8}
            itemCount={33}
            itemData={itemData}
            itemSize={height}
        >
            {Row}
        </FixedSizeList>
    )
}

const createItemData = memoize(
    (list, onSelect, onToggleFavorite) =>
    ({ list, onSelect, onToggleFavorite })
)

const Row = memo<{ data: [], index: number, style: CSSProperties }>(({ data, index, style }) => {
    const { items, toggleItemActive } = data
    const item = items[index];

    return (
        <Service
            onSelect={() => toggleItemActive(index)}
            style={style}
        >
            {item.label} is {item.isActive ? 'active' : 'inactive'}
        </Service>
    )
}, areEqual)