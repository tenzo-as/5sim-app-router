import '@/app/globals.css'
import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
// import { locales } from '../../../i18n.config'

const inter = Inter({ subsets: ['latin'] })

// export function generateStaticParams() {
//     return ['en'].map(locale => ({ locale }))
// }
//
// export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
//     const t = await getTranslations({
//         locale,
//         // namespace: "Layout.metaData",
//     })
//
//     return {
//         title: t('hello'),
//         description: t('hello'),
//     }
// }

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

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages()

    return (
        <html lang={locale || 'en'} >
            <body className={`${inter.className} antialiased`}>{children}</body>
            <body>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </body>
        </html>
    )
}

export default LocaleLayout
