import { apiClient } from '@/shared/utils/api'

export const fetchCountries = async () => {
    const { data } = await apiClient.get<CountriesType>('v1/guest/countries')

    return data
}

export type CountriesType = Record<string, CountryType>

export type CountryType = {
    iso: {
        [countryCode: string]: 1
    }
    prefix: {
        [countryPrefix: string]: 1
    }
    text_ru: string
    text_en: string
} & {
    [operatorKey: string]: {
        activation: 1
        reuse: 1 | undefined
    }
}