'use client'

import { Theme } from '@/features/theme/types'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import cookies, { CookiesKey } from '@/shared/utils/cookies'

export type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
    isLight: boolean
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

type Props = {
    initialTheme: Theme
    children: ReactNode
}

const ThemeProvider: React.FC<Props> = ({ initialTheme, children }) => {
    const [theme, _setTheme] = useState<Theme>(initialTheme)

    const setTheme = (theme: Theme) => {
        saveTheme(theme)

        _setTheme(theme)
    }

    useEffect(() => {
        const savedTheme = cookies.get(CookiesKey.Theme)

        if (savedTheme) {
            if (initialTheme !== savedTheme) {
                setTheme(savedTheme)
            }
        } else {
            const prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? Theme.Dark
                : Theme.Light

            setTheme(prefersTheme)
        }
    }, [])

    const toggleTheme = () => {
        _setTheme(prevTheme => {
            const toggledTheme = prevTheme === Theme.Light ? Theme.Dark : Theme.Light

            saveTheme(toggledTheme)

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

const saveTheme = (theme: Theme) => {
    cookies.set(CookiesKey.Theme, theme)
}
