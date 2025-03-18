'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { objectKeys } from '@/shared/utils/objectKeys'
import cookies, { CookiesKey } from '@/shared/utils/cookies'
import { mapCountriesResponse, MappedCountries } from '@/features/countries/utils/mapCountriesResponse'
import { fetchCountries } from '@/features/countries/utils/fetchCountries'

type CountriesContextType = {
    byId: MappedCountries
    ids: string[]
    favorites: Set<string>,
    toggleFavorite: (countryId: string) => void
}

export const CountriesContext = createContext<CountriesContextType | null>(null)

type Props = {
    initialCountries: MappedCountries
    initialFavorites: string[]
    children: ReactNode
}

const CountriesProvider = ({
    initialCountries,
    initialFavorites,
    children,
}: Props) => {
    const [countries, setCountries] = useState<Pick<CountriesContextType, 'byId' | 'ids'>>({
        byId: initialCountries,
        ids: objectKeys(initialCountries),
    })

    const updateCountries = async () => {
        const response = await fetchCountries()

        setCountries({
            byId: mapCountriesResponse(response),
            ids: objectKeys(response)
        })
    }

    useEffect(() => {
        updateCountries()
    }, [])

    const [favorites, setFavorites] = useState<CountriesContextType['favorites']>(new Set([...initialFavorites]))

    const toggleFavorite = (countryId: string) => {
        setFavorites(prevState => {
            const newState = new Set([...prevState])

            if (newState.has(countryId)) {
                newState.delete(countryId)
            } else {
                newState.add(countryId)
            }

            saveFavorites([...newState])

            return newState
        })
    }

    return (
        <CountriesContext.Provider value={{ ...countries, favorites, toggleFavorite }}>
            {children}
        </CountriesContext.Provider>
    )
}

export default CountriesProvider

const saveFavorites = (ids: string[]) => {
    cookies.set(CookiesKey.FavoriteCountries, ids)
}