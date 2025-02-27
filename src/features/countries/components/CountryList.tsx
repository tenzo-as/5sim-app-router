import memoize from 'memoize-one'
import { FixedSizeList as VirtualizedList, areEqual } from 'react-window'
import { CSSProperties, memo } from 'react'
import Country from '@/features/countries/components/Country'
import { CountriesByServiceType } from '@/features/countries/utils/fetchCountriesByService'
import { VirtualizedListItemWrapper } from '@/features/gateway/components/shared/VirtualizedListItemWrapper'

const height = 58

type Props = {
    countryIds: string[]
    countryById: CountriesByServiceType
    onSelect: (id: string) => void
    onToggleFavorite: (id: string) => void
}

const CountryList = ({
    countryIds,
    countryById,
    onSelect,
    onToggleFavorite
}: Props) => {
    const rowProps = createRowProps(countryIds, countryById, onSelect, onToggleFavorite)

    return (
        <VirtualizedList
            height={height * 8}
            itemCount={countryIds.length}
            itemData={rowProps}
            itemSize={height}
            width={'100%'}
        >
            {Row}
        </VirtualizedList>
    )
}

export default CountryList

const createRowProps = memoize(
    (countryIds, countryById, onSelect, onToggleFavorite) =>
    ({ countryIds, countryById, onSelect, onToggleFavorite })
)

const Row = memo<RowProps>(({ data, index, style }) => {
    const { countryIds, countryById, onSelect, onToggleFavorite } = data
    const id = countryIds[index];

    return (
        <VirtualizedListItemWrapper style={style}>
            <Country
                id={id}
                count={countryById[id].Qty}
                priceFrom={countryById[id].Price}
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
