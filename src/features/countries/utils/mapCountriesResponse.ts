import { CountriesType } from '@/features/countries/utils/fetchCountries'
import { getFirstKey } from '@/shared/utils/getFirstKey'
import { objectKeys } from '@/shared/utils/objectKeys'

export type MappedCountries = Record<string, MappedCountry>

export type MappedCountry = {
    iso: string
    prefix: string
    name: {
        en: string
        ru: string
    }
}

export const mapCountriesResponse = (response: CountriesType): MappedCountries => {
    const countryIds = objectKeys(response)

    const mappedCountries = Object.fromEntries(
        countryIds.map(id => [
            id,
            {
                iso: getFirstKey(response[id].iso),
                prefix: getFirstKey(response[id].prefix),
                name: {
                    en: response[id].text_en,
                    ru: response[id].text_ru,
                },
            },
        ]),
    )

    return mappedCountries
}