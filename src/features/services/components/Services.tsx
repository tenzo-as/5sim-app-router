import ServiceList, { ServiceListProps } from '@/features/services/components/ServiceList'
import SearchField from '@/shared/components/SearchField'
import Button from '@/shared/components/Button'
import { useMemo } from 'react'
import { ruServiceAliases, serviceNameBy } from '@/features/services/utils/serviceNameBy'
import { Locale } from '@/shared/constants/LOCALES'
import { useLocale } from '@/shared/hooks/useLocale'

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
    
    return (
        <div>
            <SearchField
                value={search}
                onChange={(_, value) => onChangeSearch(value)}
                reset={() => onChangeSearch('')}
            />
            <ServiceList
                serviceIds={list}
                serviceById={serviceById}
                onSelect={() => {}}
                onToggleFavorite={() => {}}
            />
            {serviceIds.length > 8 &&
                <Button
                    variant={'text'}
                    color={'info'}
                >
                    Показать все {serviceIds.length}
                </Button>
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