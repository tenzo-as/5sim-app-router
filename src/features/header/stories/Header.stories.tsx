import Header from '@/features/header/components/Header'
import { MobileHeader } from '@/features/header/components/MobileHeader'
import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { LOCALE, LOCALES } from '@/shared/constants/LOCALES'
import { useArgs } from '@storybook/core/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
    title: 'Features/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        locale: {
            control: { type: 'select' },
            options: LOCALES,
            defaultValue: LOCALE.en,
        },
    },
    args: {
        onSignIn: fn(),
        onSignUp: fn(),
        onSignOut: fn(),
    },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

const defaultUser = {
    balance: 3245,
    id: 575643,
    activeOrdersCount: 3,
}

export const MobileHeaderNotAuthStory: Story = {
    name: 'MobileHeader (без авторизации)',
    args: {
        locale: LOCALE.en,
        isLight: true,
    },
    render: args => {
        const [{ onSignIn, onSignOut }, updateArgs] = useArgs<Story['args']>()

        const handleSignIn = () => {
            updateArgs({
                user: defaultUser,
            })

            if (args.onSignIn) args.onSignIn()
        }

        const handleSignOut = () => {
            updateArgs({
                user: undefined,
            })

            if (args.onSignOut) args.onSignOut()
        }

        return (
            <StoryWithCode code={mobileHeaderNotAuthCode}>
                <MobileHeader {...args} onSignIn={handleSignIn} onSignOut={handleSignOut} />
            </StoryWithCode>
        )
    },
}

const mobileHeaderNotAuthCode = `
import { LOCALE } from '@/shared/constants/LOCALES'

<MobileHeader 
    locale={LOCALE.en}
    isLight={true}
/>
`

export const MobileHeaderAuthStory: Story = {
    name: 'MobileHeader (с авторизации)',
    args: {
        locale: LOCALE.en,
        isLight: true,
        user: defaultUser,
    },
    render: args => {
        const [{ onSignIn, onSignOut }, updateArgs] = useArgs<Story['args']>()

        const handleSignIn = () => {
            updateArgs({
                user: defaultUser,
            })

            if (args.onSignIn) args.onSignIn()
        }

        const handleSignOut = () => {
            updateArgs({
                user: undefined,
            })

            if (args.onSignOut) args.onSignOut()
        }

        return (
            <StoryWithCode code={mobileHeaderAuthCode}>
                <MobileHeader {...args} onSignIn={handleSignIn} onSignOut={handleSignOut} />
            </StoryWithCode>
        )
    },
}

const mobileHeaderAuthCode = `
import { LOCALE } from '@/shared/constants/LOCALES'

<MobileHeader 
    locale={LOCALE.en}
    isLight={true}
    user={{
        balance: 3245,
        id: 575643,
        activeOrdersCount: 3,
    }}
/>
`
