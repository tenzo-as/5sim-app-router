import ServiceList, { ServiceListProps } from '@/features/services/components/ServiceList'
import SearchField from '@/shared/components/SearchField'
import Button from '@/shared/components/Button'
import { useEffect, useMemo } from 'react'
import { ruServiceAliases, serviceNameBy } from '@/features/services/utils/serviceNameBy'
import { Locale } from '@/shared/constants/LOCALES'
import { useLocale } from '@/shared/hooks/useLocale'
import { useBoolean } from '@/shared/hooks/useBoolean'
import ExpandListButton from '@/features/gateway/components/shared/ExpandListButton'
import AddServiceButton from '@/features/services/components/AddServiceButton'
import { useTranslations } from 'next-intl'
import SelectedService from '@/features/services/components/SelectedService'

type Props = {
    selectedService?: string | null
    onSelect?: (selectedService: string | null) => void
    search: string,
    onChangeSearch: (value: string) => void,
    collapsedList: string[]
} & ServiceListProps

const Services = ({
    selectedService,
    onSelect,
    search,
    onChangeSearch,
    serviceIds,
    serviceById,
    collapsedList,
}: Props) => {
    const t = useTranslations()
    const locale = useLocale()

    const isExpanded = useBoolean()

    const list = useMemo(() => {
        if (search) {
            return filterBySearch(search, serviceIds, locale)
        }

        if (!isExpanded.value) return collapsedList
        
        return serviceIds
    }, [search, isExpanded.value])

    return (
        <div>
            <SearchField
                value={search}
                onChange={(_, value) => onChangeSearch(value)}
                reset={() => onChangeSearch('')}
                placeholder={t('services.searchPlaceholder')}
                className={isExpanded.value ? 'mb-2' : 'mb-4'}
            />
            {isExpanded.value &&
                <AddServiceButton className={'mb-2'} />
            }
            {selectedService
                ? <SelectedService
                    id={selectedService}
                    locale={locale}
                    onRemove={() => onSelect(null)}
                />
                : <ServiceList
                    serviceIds={list}
                    serviceById={serviceById}
                    onSelect={id => onSelect(id)}
                    favoriteServices={{}}
                    onToggleFavorite={() => {}}
                />
            }
            {serviceIds.length > 8 &&
                <ExpandListButton
                    count={serviceIds.length}
                    expanded={isExpanded.value}
                    onToggle={isExpanded.toggle}
                    className={'mt-2'}
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