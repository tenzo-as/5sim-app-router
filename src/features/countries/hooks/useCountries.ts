import { useQuery } from '@tanstack/react-query'
import { fetchCountries } from '@/features/countries/utils/fetchCountries'
import { objectKeys } from '@/shared/utils/objectKeys'
import { getFirstKey } from '@/shared/utils/getFirstKey'

export const useCountries = () =>
    useQuery({ 
        queryKey: ['countries'],
        queryFn: fetchCountries,
        staleTime: day,
        select: data => {
            const countryIds = objectKeys(data)

            return Object.fromEntries(
                countryIds.map(id => [
                    id,
                    {
                        iso: getFirstKey(data[id].iso),
                        prefix: getFirstKey(data[id].prefix),
                        name: {
                            en: data[id].text_en,
                            ru: data[id].text_ru,
                        },
                    },
                ])
            )
        },
    })

const day = 24 * 60 * 60 * 1000