import CountryList from '@/features/countries/components/CountryList'
import { objectKeys } from '@/shared/utils/objectKeys'
import { useCountries } from '@/features/countries/hooks/useCountries'
import { useCountriesByService } from '@/features/countries/hooks/useCountriesByService'

const CountriesSelection = () => {
    const { data: countries, isFetched } = useCountriesByService()

    return (
        <div>
            {isFetched &&
                <CountryList
                    countryIds={objectKeys(data || {})}
                    countryById={data || {}}
                    onSelect={id => {}}
                    onToggleFavorite={id => {}}
                />
            }
        </div>
    )
}

export default CountriesSelection