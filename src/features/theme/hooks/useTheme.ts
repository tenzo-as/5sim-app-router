import { ThemeContext, ThemeContextType } from '@/features/theme/components/ThemeProvider'
import { useContext } from 'react'

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return context
}
