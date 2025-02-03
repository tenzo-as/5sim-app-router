'use client'

import { Theme } from '@/features/theme/types'
import storage, { StorageKey } from '@/shared/utils/storage'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

export type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
    isLight: boolean
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

type Props = {
    children: ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, _setTheme] = useState<Theme>(Theme.Light)

    const setTheme = (theme: Theme) => {
        updateThemeSettings(theme)

        _setTheme(theme)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = storage.get<Theme>(StorageKey.Theme)

            if (savedTheme) {
                setTheme(savedTheme)
            } else {
                const prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? Theme.Dark
                    : Theme.Light

                setTheme(prefersTheme)
            }
        } else {
            setTheme(Theme.Light)
        }
    }, [])

    const toggleTheme = () => {
        _setTheme(prevTheme => {
            const toggledTheme = prevTheme === Theme.Light ? Theme.Dark : Theme.Light

            updateThemeSettings(toggledTheme)

            return toggledTheme
        })
    }

    const isLight = theme !== Theme.Dark

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isLight }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

const updateThemeSettings = (theme: Theme) => {
    storage.set(StorageKey.Theme, theme)
    document.documentElement.setAttribute('data-theme', theme)
}
