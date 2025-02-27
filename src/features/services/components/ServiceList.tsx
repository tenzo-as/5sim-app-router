import memoize from 'memoize-one'
import { FixedSizeList as VirtualizedList, areEqual } from 'react-window'
import { CSSProperties, memo } from 'react'
import Service from '@/features/services/components/Service'
import { ServicesType } from '@/features/services/utils/fetchServices'
import { VirtualizedListItemWrapper } from '@/features/gateway/components/shared/VirtualizedListItemWrapper'

const height = 58

export type ServiceListProps = {
    serviceIds: string[]
    serviceById: ServicesType
    onSelect: (id: string) => void
    onToggleFavorite: (id: string) => void
    favoriteServices?: Record<string, true>
}

const ServiceList = ({
    serviceIds,
    serviceById,
    onSelect,
    onToggleFavorite
}: ServiceListProps) => {
    const rowProps = createRowProps(serviceIds, serviceById, onSelect, onToggleFavorite)

    return (
        <VirtualizedList
            height={getHeight(serviceIds.length)}
            itemCount={serviceIds.length}
            itemData={rowProps}
            itemSize={height}
            width={'100%'}
        >
            {Row}
        </VirtualizedList>
    )
}

export default ServiceList

const createRowProps = memoize(
    (serviceIds, serviceById, onSelect, onToggleFavorite) =>
    ({ serviceIds, serviceById, onSelect, onToggleFavorite })
)

const getHeight = (length: number) =>
    length > 8
        ? height * 8
        : height * length

const Row = memo<RowProps>(({ data, index, style }) => {
    const { serviceIds, serviceById, onSelect, onToggleFavorite } = data
    const id = serviceIds[index];

    return (
        <VirtualizedListItemWrapper style={style}>
            <Service
                id={id}
                count={serviceById[id].Qty}
                priceFrom={serviceById[id].Price}
                onSelect={() => onSelect(id)}
                onToggleFavorite={() => onToggleFavorite(id)}
            />
        </VirtualizedListItemWrapper>
    )
}, areEqual)

type RowProps = {
    data: Props
    index: number
    style: CSSProperties
}