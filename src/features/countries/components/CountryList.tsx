import memoize from 'memoize-one'
import { FixedSizeList as VirtualizedList, areEqual } from 'react-window'
import { CSSProperties, memo } from 'react'
import Country from '@/features/countries/components/Country'
import { CountriesByServiceType } from '@/features/countries/utils/fetchCountriesByService'
import { VirtualizedListItemWrapper } from '@/features/gateway/components/shared/VirtualizedListItemWrapper'
import { twMerge } from 'tailwind-merge'
import { Locale } from '@/shared/constants/LOCALES'

const height = 56 + 2

export type CountryListProps = {
    countryIds: string[]
    countryById: CountriesByServiceType
    onSelect: (id: string) => void
    onToggleFavorite: (id: string) => void
    favoriteCountries: Set<string>
    locale?: Locale
    className?: string
}

const CountryList = ({
    countryIds,
    countryById,
    onSelect,
    favoriteCountries = new Set(),
    onToggleFavorite,
    locale,
    className,
}: CountryListProps) => {
    const rowProps = createRowProps(countryIds, countryById, onSelect, locale, favoriteCountries, onToggleFavorite)

    return (
        <VirtualizedList
            height={getHeight(countryIds.length)}
            itemCount={countryIds.length}
            itemData={rowProps}
            itemSize={height}
            width={'100%'}
            className={twMerge(
                'rounded-[20px]',
                className,
            )}
        >
            {Row}
        </VirtualizedList>
    )
}

export default CountryList

const createRowProps = memoize(
    (countryIds, countryById, onSelect, locale, favoriteCountries, onToggleFavorite) =>
    ({ countryIds, countryById, onSelect, locale, favoriteCountries, onToggleFavorite })
)

const getHeight = (length: number) =>
    length > 8
        ? height * 8
        : height * length

const Row = memo<RowProps>(({ data, index, style }) => {
    const { countryIds, countryById, onSelect, locale, favoriteCountries, onToggleFavorite } = data
    const id = countryIds[index];

    return (
        <VirtualizedListItemWrapper style={style}>
            <Country
                id={id}
                count={countryById[id]?.Qty}
                priceFrom={countryById[id]?.Price}
                onSelect={() => onSelect(id)}
                isFavorite={favoriteCountries.has(id)}
                onToggleFavorite={() => onToggleFavorite(id)}
                locale={locale}
            />
        </VirtualizedListItemWrapper>
    )
}, areEqual)

type RowProps = {
    data: Omit<CountryListProps, 'className'>
    index: number
    style: CSSProperties
}
