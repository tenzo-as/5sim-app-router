import '@/app/globals.css'
import ThemeProvider from '@/features/theme/components/ThemeProvider'
import ThemedHtml from '@/features/theme/components/ThemedHtml'
import { routing } from '@/i18n/routing'
import { DEFAULT_LOCALE } from '@/shared/constants/LOCALES'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

const LocaleLayout = async ({
    params: { locale },
    children,
}: Readonly<{
    params: { locale: 'en' | 'ru' | 'zh' }
    children: ReactNode
}>) => {
    if (!routing.locales.includes(locale)) {
        notFound()
    }

    const messages = await getMessages()

    return (
        <ThemeProvider>
            <ThemedHtml lang={locale || DEFAULT_LOCALE}>
                <body className={`${inter.className} antialiased`}>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                        <ToastContainer />
                    </NextIntlClientProvider>
                </body>
            </ThemedHtml>
        </ThemeProvider>
    )
}

export default LocaleLayout
