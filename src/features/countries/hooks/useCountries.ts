import { useContext } from 'react'
import { CountriesContext } from '@/features/countries/providers/CountriesProvider'

export const useCountries = () => {
    const context = useContext(CountriesContext)

    if (!context) {
        throw new Error('useCountries must be used within a CountriesContext')
    }

    return context
}