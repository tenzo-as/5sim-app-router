import { Meta, StoryObj } from '@storybook/react'
import { UserMenu } from '@/features/header/components/tools/UserMenu'
import StoryWithCode from '@/features/stories/components/StoryWithCode'

const meta = {
    title: 'Features/Header/Tools',
    component: UserMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: { type: 'number', },
        },
    },
} satisfies Meta<typeof UserMenu>

export default meta

type Story = StoryObj<typeof meta>

export const UserMenuStory: Story = {
    name: 'UserMenu',
    args: {
        id: 32245
    },
    render: (args) =>  (
        <StoryWithCode code={burgerCode}>
            <UserMenu {...args} />
            <div className={'bg-header rounded-2xl p-2'}>
                <UserMenu {...args} />
            </div>
        </StoryWithCode>
)
}

const burgerCode = `
<UserMenu
    id={32245}
/>

<div className={'bg-header rounded-2xl p-2'}>
    <UserMenu 
        id={32245}
    />
</div>
`
