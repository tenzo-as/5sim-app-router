import { Meta, StoryObj } from '@storybook/react'
import { MobileOrdersButton } from '@/features/header/components/tools/MobileOrdersButton'
import StoryWithCode from '@/features/stories/components/StoryWithCode'

const meta = {
    title: 'Features/Header/Tools',
    component: MobileOrdersButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        activeOrdersCount: {
            control: { type: 'number', },
        },
    },
} satisfies Meta<typeof MobileOrdersButton>

export default meta

type Story = StoryObj<typeof meta>

export const MobileOrdersButtonStory: Story = {
    name: 'MobileOrdersButton',
    args: {
        activeOrdersCount: 3,
    },
    render: (args) =>  (
        <StoryWithCode code={burgerCode}>
            <MobileOrdersButton {...args} />
            <div className={'bg-header rounded-2xl p-2'}>
                <MobileOrdersButton {...args} />
            </div>
        </StoryWithCode>
)
}

const burgerCode = `
<MobileOrdersButton
    activeOrdersCount={3}
/>

<div className={'bg-header rounded-2xl p-2'}>
    <MobileOrdersButton 
        activeOrdersCount={3}
    />
</div>
`
