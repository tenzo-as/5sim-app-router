import { useQuery } from '@tanstack/react-query'
import { fetchServices } from '@/features/services/utils/fetchServices'

export const useServices = (countryId?: string) =>
    useQuery({ 
        queryKey: countryId ? ['services', countryId] : ['services'],
        queryFn: () => fetchServices(countryId || undefined),
        staleTime: fiveSec,
    })

const fiveSec = 5 * 1000
