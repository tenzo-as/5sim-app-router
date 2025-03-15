import { apiClient } from '@/shared/utils/api'

export const fetchServices = async (countryId: string = 'any') => {
    try {
        const { data } = await apiClient.get<ServicesType>(`v1/guest/products/${countryId}/any`)

        return data
    } catch (e) {
        return {}
    }
}

export type ServicesType = Record<string, ServiceType>

export type ServiceType = {
    Price: number
    Qty: number
    Category: 'activation' | 'hosting'
}