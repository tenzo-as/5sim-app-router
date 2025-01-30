import { Meta, StoryObj } from '@storybook/react'
import { TopUpBalanceButton } from '@/features/header/components/tools/TopUpBalanceButton'
import StoryWithCode from '@/features/stories/components/StoryWithCode'

const meta = {
    title: 'Features/Header/Tools',
    component: TopUpBalanceButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        balance: {
            control: { type: 'number', },
        },
    },
} satisfies Meta<typeof TopUpBalanceButton>

export default meta

type Story = StoryObj<typeof meta>

export const TopUpBalanceButtonStory: Story = {
    name: 'TopUpBalanceButton',
    args: {
         balance: 2500
    },
    render: (args) =>  (
        <StoryWithCode
            code={burgerCode}
            info={'В определенном брекпоинте, пропадает иконка кошелька'}
        >
            <TopUpBalanceButton {...args} />
            
            <div className={'bg-header rounded-2xl p-2'}>
                <TopUpBalanceButton  {...args} />
            </div>
        </StoryWithCode>
)
}

const burgerCode = `
<TopUpBalanceButton
    balance={2500}
/>

<div className={'bg-header rounded-2xl p-2'}>
    <TopUpBalanceButton 
        balance={2500}
    />
</div>
`
