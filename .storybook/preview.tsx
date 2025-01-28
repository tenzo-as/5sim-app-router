import '@/app/globals.css'
import type { Preview } from '@storybook/react'
import ruMessages from '../messages/ru.json'
import { NextIntlClientProvider } from 'next-intl'

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
        )
    ],
}

export default preview
