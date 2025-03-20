import { apiClient } from '@/shared/utils/api'

export const fetchCountriesByService = async (serviceId: string) => {
    const { data } = await apiClient.get<CountriesByServiceType>(`v1/guest/products/any/any/${serviceId}?single=0&sort=top`)

    return data
}

export type CountriesByServiceType = Record<string, CountryByServiceType>

export type CountryByServiceType = {
    Price: number
    Qty: number
    Category: 'activation' | 'hosting'
    Rank?: number
}
