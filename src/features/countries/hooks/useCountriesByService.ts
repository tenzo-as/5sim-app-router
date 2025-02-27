import { useQuery } from '@tanstack/react-query'
import { fetchCountries } from '@/features/countries/utils/fetchCountries'

export const useCountriesByService = () =>
    useQuery({
        queryKey: ['countriesByService'],
        queryFn: fetchCountries,
        staleTime: fiveSec,
    })

const fiveSec = 5 * 1000