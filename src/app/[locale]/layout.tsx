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
import { Theme } from '@/features/theme/types'
import { headers } from 'next/headers'
import { CookiesKey } from '@/shared/utils/cookies'
import GatewayProvider from '@/features/gateway/providers/GatewayProvider'
import { fetchServices } from '@/features/services/utils/fetchServices'
import ServicesProvider from '@/features/services/providers/ServicesProvider'

const inter = Inter({ subsets: ['latin'] })

const LocaleLayout = async ({
    params,
    children,
}: Readonly<{
    params: Promise<{ locale: 'en' | 'ru' | 'zh' }>
    children: ReactNode
}>) => {
    const headersResponse = await headers()

    const theme = headersResponse.get(CookiesKey.Theme) as Theme || Theme.Light
    const service = headersResponse.get(CookiesKey.Service)
    const lastService = headersResponse.get(CookiesKey.LastService)
    const favoriteServices = headersResponse.get(CookiesKey.FavoriteServices) || '[]'
    const country = headersResponse.get(CookiesKey.Country)
    const lastCountry = headersResponse.get(CookiesKey.LastCountry)

    console.log(favoriteServices)

    const services = await fetchServices()

    const { locale } = await params

    if (!routing.locales.includes(locale)) {
        notFound()
    }

    const messages = await getMessages()

    return (
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider initialTheme={theme}>
                <ThemedHtml lang={locale || DEFAULT_LOCALE}>
                    <ServicesProvider
                        initialServices={services}
                        initialFavorites={JSON.parse(favoriteServices)}
                    >
                        <GatewayProvider
                            initialValue={{
                                service,
                                lastService,
                                country,
                                lastCountry,
                            }}
                        >
                            <body className={`${inter.className} antialiased`}>
                                {children}
                                <ToastContainer />
                            </body>
                        </GatewayProvider>
                    </ServicesProvider>
                </ThemedHtml>
            </ThemeProvider>
        </NextIntlClientProvider>
    )
}

export default LocaleLayout
