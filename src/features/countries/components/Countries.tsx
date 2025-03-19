import SearchField from '@/shared/components/SearchField'
import { useMemo, useState } from 'react'
import { countryNameBy } from '@/features/countries/utils/countryNameBy'
import { Locale } from '@/shared/constants/LOCALES'
import { useLocale } from '@/shared/hooks/useLocale'
import { useBoolean } from '@/shared/hooks/useBoolean'
import ExpandListButton from '@/features/gateway/components/shared/ExpandListButton'
import { useTranslations } from 'next-intl'
import { clsx } from 'clsx'
import CountryList, { CountryListProps } from '@/features/countries/components/CountryList'
import SelectedCountry from '@/features/countries/components/SelectedCountry'
import Fuse from 'fuse.js'
import CountriesSortMenu, { SortBy } from '@/features/countries/components/CountriesSortMenu'
import { sort } from 'fast-sort'
import { CountriesByServiceType } from '@/features/countries/utils/fetchCountriesByService'

type Props = {
    selectedCountry?: string | null
    onSelect?: (selectedCountry: string | null) => void
    search: string
    onChangeSearch: (value: string) => void
    collapsedList: string[]
} & CountryListProps

const Countries = ({
    selectedCountry,
    onSelect,
    search,
    onChangeSearch,
    countryIds,
    countryById,
    favoriteCountries,
    onToggleFavorite,
    collapsedList,
}: Props) => {
    const t = useTranslations('countries')
    const locale = useLocale()

    const isExpanded = useBoolean()

    const canShowSortMenu = !selectedCountry && isExpanded.value
    const canShowExpandButton = !selectedCountry && countryIds.length > 8

    const [sortBy, setSortBy] = useState<SortBy>(SortBy.Name)

    const list = useMemo(() => {
        if (search) {
            return filterBySearch(search, countryIds, locale)
        }

        if (!isExpanded.value) {
            const isServiceSelected = Object.keys(countryById).length > 0

            return getCollapsedListSortedByFavorites(isServiceSelected ? countryIds : collapsedList, favoriteCountries)
        }

        return getSortedIds(countryIds, countryById, sortBy, locale)
    }, [search, countryIds, countryById, favoriteCountries, isExpanded.value, sortBy])

    return (
        <div>
            {!selectedCountry && (
                <SearchField
                    value={search}
                    onChange={(_, value) => onChangeSearch(value)}
                    reset={() => onChangeSearch('')}
                    placeholder={t('searchPlaceholder')}
                    className={isExpanded.value ? 'mb-2' : 'mb-4'}
                />
            )}
            {canShowSortMenu && (
                <CountriesSortMenu sortBy={sortBy} onSortChange={setSortBy} className={'mb-2'} />
            )}
            {selectedCountry && (
                <SelectedCountry
                    id={selectedCountry}
                    locale={locale}
                    onRemove={() => onSelect(null)}
                />
            )}
            <CountryList
                countryIds={list}
                countryById={countryById}
                onSelect={id => onSelect(id)}
                favoriteCountries={favoriteCountries}
                onToggleFavorite={onToggleFavorite}
                className={clsx(selectedCountry && 'hidden')}
            />
            {canShowExpandButton && (
                <ExpandListButton
                    count={countryIds.length}
                    expanded={isExpanded.value}
                    onToggle={isExpanded.toggle}
                    className={'mt-2'}
                />
            )}
        </div>
    )
}

export default Countries

const getCollapsedListSortedByFavorites = (collapsedList: string[], favorites: Set<string>) => {
    const favoriteList = [...favorites]
    const nonFavoriteList = collapsedList.filter(id => !favorites.has(id))

    return favoriteList.concat(nonFavoriteList).slice(0, 8)
}

const getSortedIds = (
    countryIds: string[],
    countryById: CountriesByServiceType,
    sortBy: SortBy,
    locale: Locale,
) => {
    const sortMode = getSortMode(countryById, locale)
    const haveExtraData = Object.keys(countryById).length

    if (haveExtraData) {
        return sort(countryIds)
            [sortMode[sortBy].direction]
        (sortMode[sortBy].callback)
    } else {
        return sort(countryIds)
            [sortMode[SortBy.Name].direction]
        (sortMode[SortBy.Name].callback)
    }
}

const getSortMode = (countryById: CountriesByServiceType, locale: Locale) => {
    type Callback = (countryId: string) => number | string | undefined
    type SortMode = {
        direction: 'asc' | 'desc',
        callback: Callback | Callback[],
    }

    const sortMode: Record<SortBy, SortMode> = {
        [SortBy.Popularity]: {
            direction: 'asc',
            callback: [
                id => countryById[id].Rate,
                id => countryNameBy(id, locale),
            ],
        },
        [SortBy.Name]: {
            direction: 'asc',
            callback: id => countryNameBy(id, locale),
        },
        [SortBy.Price]: {
            direction: 'asc',
            callback: id => countryById[id].Price,
        },
        [SortBy.Quantity]: {
            direction: 'asc',
            callback: id => countryById[id].Qty,
        },
    }

    return sortMode
}

const filterBySearch = (search: string, countryIds: string[], locale: Locale) => {
    const countriesWithName = countryIds.map(id => ({
        id,
        name: countryNameBy(id, locale),
    }))

    const fuse = new Fuse(countriesWithName, { keys: ['name'] })

    const filteredCountryIds = fuse.search(search).map(({ item }) => item.id)

    return filteredCountryIds
}