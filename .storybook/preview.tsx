import '@/app/globals.css'
import type { Preview } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'
import {
    AppRouterContext,
    type AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import ruMessages from '../messages/ru.json'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        nextjs: {
            appDirectory: true,
        },
    },
    decorators: [
        Story => (
            <NextIntlClientProvider locale={'ru'} messages={ruMessages}>
                <Story />
            </NextIntlClientProvider>
        ),
        Story => (
            <AppRouterContext.Provider value={{} as AppRouterInstance}>
                <Story />
            </AppRouterContext.Provider>
        ),
    ],
}

export default preview
