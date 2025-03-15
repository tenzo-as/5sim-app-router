'use client'

import React, { createContext, ReactNode, useState } from 'react'
import cookies, { CookiesKey } from '@/shared/utils/cookies'

type Value = string | null

export type GatewayContextType = {
    service: Value,
    setService: (value: Value) => void,
    lastService: Value,
    country: Value,
    setCountry: (value: Value) => void,
    lastCountry: Value,
    operator: Value,
    setOperator: (value: Value) => void,
}

export const GatewayContext = createContext<GatewayContextType | null>(null)

type Props = {
    initialValue: {
        service: Value
        lastService: Value
        country: Value
        lastCountry: Value
    }
    children: ReactNode
}

const GatewayProvider: React.FC<Props> = ({
    initialValue,
    children,
}) => {
    const [service, _setService] = useState<Value>(initialValue.service)
    const [lastService, _setLastService] = useState<Value>(initialValue.lastService)
    const [country, _setCountry] = useState<Value>(initialValue.country)
    const [lastCountry, _setLastCountry] = useState<Value>(initialValue.lastCountry)
    const [operator, setOperator] = useState<Value>(null)

    const setService = (value: Value) => {
        saveCookies(CookiesKey.Service, value)
        _setService(value)

        if (value) {
            saveCookies(CookiesKey.LastService, value)
            _setLastService(value)
        }
    }

    const setCountry = (value: Value) => {
        saveCookies(CookiesKey.Country, value)
        _setCountry(value)

        if (value) {
            saveCookies(CookiesKey.LastCountry, value)
            _setLastCountry(value)
        }
    }

    return (
        <GatewayContext.Provider
            value={{
                service,
                setService,
                lastService,
                country,
                setCountry,
                lastCountry,
                operator,
                setOperator,
            }}
        >
            {children}
        </GatewayContext.Provider>
    )
}

export default GatewayProvider

const saveCookies = (key: CookiesKey, value: Value) => {
    if (value) cookies.set(key, value)
    else cookies.remove(key)
}