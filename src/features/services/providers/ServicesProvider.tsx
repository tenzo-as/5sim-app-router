'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { fetchServices, ServicesType } from '@/features/services/utils/fetchServices'
import { useInterval } from '@/shared/hooks/useInterval'
import { objectKeys } from '@/shared/utils/objectKeys'
import cookies, { CookiesKey } from '@/shared/utils/cookies'

type ServicesContextType = {
    byId: ServicesType
    ids: string[]
    favorites: Set<string>,
    toggleFavorite: (serviceId: string) => void
}

export const ServicesContext = createContext<ServicesContextType | null>(null)

type Props = {
    initialServices: ServicesType
    initialFavorites: string[]
    children: ReactNode
}

const ServicesProvider = ({
    initialServices,
    initialFavorites,
    children,
}: Props) => {
    const [services, setServices] = useState<Pick<ServicesContextType, 'byId' | 'ids'>>({
        byId: initialServices,
        ids: objectKeys(initialServices),
    })

    const updateServices = async () => {
        const response = await fetchServices()

        setServices({
            byId: response,
            ids: objectKeys(response)
        })
    }

    useEffect(() => {
        updateServices()
    }, [])

    useInterval(updateServices, fiveSec)

    const [favorites, setFavorites] = useState<ServicesContextType['favorites']>(new Set([...initialFavorites]))

    const toggleFavorite = (serviceId: string) => {
        setFavorites(prevState => {
            const newState = new Set([...prevState])

            if (newState.has(serviceId)) {
                newState.delete(serviceId)
            } else {
                newState.add(serviceId)
            }

            saveFavorites([...newState])

            return newState
        })
    }

    return (
        <ServicesContext.Provider value={{ ...services, favorites, toggleFavorite }}>
            {children}
        </ServicesContext.Provider>
    )
}

export default ServicesProvider

const fiveSec = 5000

const saveFavorites = (ids: string[]) => {
    cookies.set(CookiesKey.FavoriteServices, ids)
}