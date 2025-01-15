'use client'
import { useTheme } from '@/features/theme/hooks/useTheme'
import { ReactNode } from 'react'

type Props = {
    lang?: string
    children?: ReactNode
}

const ThemedHtml = ({ lang, children }: Props) => {
    const { theme } = useTheme()

    return (
        <html lang={lang} data-theme={theme}>
            {children}
        </html>
    )
}

export default ThemedHtml
