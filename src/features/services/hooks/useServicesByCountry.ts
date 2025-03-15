import { useQuery } from '@tanstack/react-query'
import { fetchServices } from '@/features/services/utils/fetchServices'
import { useInterval } from '@/shared/hooks/useInterval'

export const useServicesByCountry = (countryId: string | null) => {
    const query = useQuery({
        queryKey: ['services', countryId],
        queryFn: () => tryGetServices(countryId),
        staleTime: Infinity,
    })

    useInterval(() => query.refetch(), fiveSec)

    return query
}

const fiveSec = 5 * 1000

const tryGetServices = (countryId: string | null) =>
    countryId
        ? fetchServices(countryId)
        : null