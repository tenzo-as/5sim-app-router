import { useQuery } from '@tanstack/react-query'
import { fetchServices, ServicesType } from '@/features/services/utils/fetchServices'
import { fetchCountriesByService } from '@/features/countries/utils/fetchCountriesByService'

export const useServices = (serviceId: string) =>
    useQuery({ 
        queryKey: ['services'],
        queryFn: () => fetchCountriesByService,
        staleTime: fiveSec,
    })

const fiveSec = 5 * 1000
