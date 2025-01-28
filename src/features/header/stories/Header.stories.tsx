import Header from '@/features/header/components/Header'
import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'
import { LOCALE, LOCALES } from '@/shared/constants/LOCALES'
import { MobileHeader } from '@/features/header/components/MobileHeader'
import StoryWithCode from '@/features/stories/components/StoryWithCode'

const meta = {
    title: 'Features/Header',
    component: Header,
    parameters: {
        layout: 'centered',

    },
    tags: ['autodocs'],
    argTypes: {
        locale: {
            control: { type: 'select', },
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

export const MobileHeaderStory: Story = {
    name: 'Mobile Header',
    args: {
        locale: LOCALE.en,
        isLight: true,
    },
    render: args => (
        <StoryWithCode code={mobileHeaderCode}>
            <MobileHeader {...args} />
        </StoryWithCode>
    )
}

const mobileHeaderCode = `
import { LOCALE } from '@/shared/constants/LOCALES'

<MobileHeader 
    locale={LOCALE.en}
    isLight={true}
/>
`