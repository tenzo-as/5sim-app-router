import memoize from 'memoize-one'
import { FixedSizeList as VirtualizedList, areEqual } from 'react-window'
import { CSSProperties, memo } from 'react'
import Service from '@/features/services/components/Service'
import { ServicesType } from '@/features/services/utils/fetchServices'
import { VirtualizedListItemWrapper } from '@/features/gateway/components/shared/VirtualizedListItemWrapper'
import { Locale } from '@/shared/constants/LOCALES'

const height = 58

export type ServiceListProps = {
    serviceIds: string[]
    serviceById: ServicesType
    onSelect: (id: string) => void
    onToggleFavorite: (id: string) => void
    favoriteServices: Record<string, true>
    locale?: Locale
    className?: string
}

const ServiceList = ({
    serviceIds,
    serviceById,
    onSelect,
    favoriteServices = {},
    onToggleFavorite,
    locale,
    className,
}: ServiceListProps) => {
    const rowProps = createRowProps(serviceIds, serviceById, onSelect, locale, favoriteServices, onToggleFavorite)

    return (
        <VirtualizedList
            height={getHeight(serviceIds.length)}
            itemCount={serviceIds.length}
            itemData={rowProps}
            itemSize={height}
            width={'100%'}
            className={className}
        >
            {Row}
        </VirtualizedList>
    )
}

export default ServiceList

const createRowProps = memoize(
    (serviceIds, serviceById, onSelect, locale, favoriteServices, onToggleFavorite) =>
    ({ serviceIds, serviceById, onSelect, locale, favoriteServices, onToggleFavorite })
)

const getHeight = (length: number) =>
    length > 8
        ? height * 8
        : height * length

const Row = memo<RowProps>(({ data, index, style }) => {
    const { serviceIds, serviceById, onSelect, locale, favoriteServices, onToggleFavorite } = data
    const id = serviceIds[index]

    return (
        <VirtualizedListItemWrapper style={style}>
            <Service
                id={id}
                count={serviceById[id]?.Qty}
                priceFrom={serviceById[id]?.Price}
                onSelect={() => onSelect(id)}
                isFavorite={!!favoriteServices[id]}
                onToggleFavorite={() => onToggleFavorite(id)}
                locale={locale}
            />
        </VirtualizedListItemWrapper>
    )
}, areEqual)

type RowProps = {
    data: Omit<ServiceListProps, 'className'>
    index: number
    style: CSSProperties
}
