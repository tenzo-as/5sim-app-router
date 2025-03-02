import ServiceList, { ServiceListProps } from '@/features/services/components/ServiceList'
import SearchField from '@/shared/components/SearchField'
import Button from '@/shared/components/Button'
import { useEffect, useMemo } from 'react'
import { ruServiceAliases, serviceNameBy } from '@/features/services/utils/serviceNameBy'
import { Locale } from '@/shared/constants/LOCALES'
import { useLocale } from '@/shared/hooks/useLocale'
import { useBoolean } from '@/shared/hooks/useBoolean'
import ExpandListButton from '@/features/gateway/components/shared/ExpandListButton'

type Props = {
    search: string,
    onChangeSearch: (value: string) => void,

} & ServiceListProps

const Services = ({
    search,
    onChangeSearch,
    serviceIds,
    serviceById,
}: Props) => {
    const locale = useLocale()

    const list = useMemo(() => {
        if (search) {
            return filterBySearch(search, serviceIds, locale)
        }
        
        return serviceIds
    }, [search])

    const isExpanded = useBoolean()

    const collapseShortList = () => {
        if (list.length < 8) {
            isExpanded.setFalse()
        }
    }

    useEffect(collapseShortList, [list])

    return (
        <div>
            <SearchField
                value={search}
                onChange={(_, value) => onChangeSearch(value)}
                reset={() => onChangeSearch('')}
            />
            {isExpanded.value }
            <ServiceList
                serviceIds={list}
                serviceById={serviceById}
                onSelect={() => {}}
                onToggleFavorite={() => {}}
            />
            {serviceIds.length > 8 &&
                <ExpandListButton
                    count={serviceIds.length}
                    expanded={isExpanded.value}
                    onToggle={isExpanded.toggle}
                />
            }
        </div>
    )
}

export default Services

const filterBySearch = (search: string, serviceIds: string[], locale: Locale) => {
    const lowerCasedSearch = search.toLowerCase()
    const alipayName = serviceNameBy('alipay', locale).toLowerCase()

    return serviceIds.filter(id => {
        const isAliexpress = id === 'aliexpress'

        if (
            isAliexpress &&
            alipayName.includes(lowerCasedSearch)
        ) {
            return true
        }

        if (
            ruServiceAliases.has(id)
            && ruServiceAliases.get(id)
                ?.includes(lowerCasedSearch)
        ) {
            return true
        }

        return serviceNameBy(id, locale)
            .toLowerCase()
            .includes(lowerCasedSearch)
    })
}