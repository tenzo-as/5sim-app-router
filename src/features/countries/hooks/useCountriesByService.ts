import { useQuery } from '@tanstack/react-query'
import { fetchCountriesByService } from '@/features/countries/utils/fetchCountriesByService'
import { useInterval } from '@/shared/hooks/useInterval'

export const useCountriesByService = (serviceId: string | null) => {
    const query = useQuery({
        queryKey: ['countries', serviceId],
        queryFn: () => tryGetCountries(serviceId),
        staleTime: Infinity,
    })

    useInterval(() => query.refetch(), serviceId ? fiveSec : null)

    return query
}

const fiveSec = 5 * 1000

const tryGetCountries = (serviceId: string | null) =>
    serviceId
        ? fetchCountriesByService(serviceId)
        : null