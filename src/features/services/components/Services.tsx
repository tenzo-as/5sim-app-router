import ServiceList, { ServiceListProps } from '@/features/services/components/ServiceList'
import SearchField from '@/shared/components/SearchField'
import Button from '@/shared/components/Button'

type Props = {
    search: string,
    onChangeSearch: (value: string) => void,

} & ServiceListProps

const Services = ({
    search,
    onChangeSearch,
    serviceIds,
}: Props) => {
    return (
        <div>
            <SearchField
                value={search}
                onChange={(_, value) => onChangeSearch(value)}
                reset={() => onChangeSearch('')}
            />
            <ServiceList
                serviceIds={[]}
                serviceById={{}}
                onSelect={() => {}}
                onToggleFavorite={() => {}}
            />
            {serviceIds.length > 8 &&
                <Button>Показать все {serviceIds.length}</Button>
            }
        </div>
    )
}

export default Services