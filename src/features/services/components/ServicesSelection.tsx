import ServiceList from '@/features/services/components/ServiceList'
import { useServices } from '@/features/services/hooks/useServices'
import { objectKeys } from '@/shared/utils/objectKeys'
import { useEffect } from 'react'

const ServicesSelection = () => {
    const { data, isFetched } = useServices()

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div>
            {isFetched &&
                <ServiceList
                    serviceIds={objectKeys(data || {})}
                    serviceById={data || {}}
                    onSelect={id => {}}
                    onToggleFavorite={id => {}}
                />
            }
        </div>
    )
}

export default ServicesSelection