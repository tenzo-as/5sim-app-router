import { LocaleSwitcher } from '@/features/header/components/tools/LocaleSwitcher'
import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { LOCALE, LOCALES } from '@/shared/constants/LOCALES'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Features/Header/Tools',
    component: LocaleSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        locale: {
            control: {
                type: 'boolean',
            },
            options: LOCALES,
        },
    },
} satisfies Meta<typeof LocaleSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const LocaleSwitcherStory: Story = {
    name: 'LocaleSwitcher',
    args: {
        locale: LOCALE.ru,
    },
    render: args => (
        <StoryWithCode code={burgerCode}>
            <LocaleSwitcher {...args} />
            <div className={'rounded-2xl bg-header p-2'}>
                <LocaleSwitcher {...args} />
            </div>
        </StoryWithCode>
    ),
}

const burgerCode = `
<LocaleSwitcher
    locale={LOCALE.ru}
/>

<div className={'bg-header rounded-2xl p-2'}>
    <LocaleSwitcher 
        locale={LOCALE.ru}
    />
</div>
`
