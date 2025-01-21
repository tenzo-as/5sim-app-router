'use client'
import storage, { StorageKey } from '@/shared/utils/storage'
import { createContext, type ReactNode, useEffect, useMemo, useState } from 'react'

type Props = {
    children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
    const [token, _setToken] = useState<JWT | null>(getTokenFromStorage)

    const setToken = (newToken: JWT) => {
        _setToken(newToken)
    }

    const resetToken = () => {
        _setToken(null)
    }

    useEffect(() => {
        if (token) {
            storeAndApplyToken()
        } else {
            clearAndRevokeToken()
        }
    }, [token])

    const storeAndApplyToken = () => {
        // apiClient.setHeaderKey('Authorization', 'Bearer ' + token)
        storage.set(StorageKey.Token, token)
    }

    const clearAndRevokeToken = () => {
        // apiClient.removeHeaderKey('Authorization')
        storage.remove(StorageKey.Token)
    }

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
            removeToken: resetToken,
            isAuthenticated: !!token,
        }),
        [token],
    )

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthProvider

const getTokenFromStorage = () => storage.get<JWT>(StorageKey.Token)

export const AuthContext = createContext({
    token: getTokenFromStorage(),
    setToken: (_newToken: JWT) => {},
    removeToken: () => {},
    isAuthenticated: false,
})

type JWT = string
