import { Burger } from '@/features/header/components/tools/Burger'
import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { useArgs } from '@storybook/core/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
    title: 'Features/Header/Tools',
    component: Burger,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
    },
    args: {
        onToggle: fn(),
    },
} satisfies Meta<typeof Burger>

export default meta

type Story = StoryObj<typeof meta>

export const BurgerStory: Story = {
    name: 'Burger',
    args: {
        open: false,
    },
    render: args => {
        const [{ open }, updateArgs] = useArgs<Story['args']>()

        const handleToggle = () => {
            updateArgs({
                open: !open,
            })

            if (args.onToggle) args.onToggle()
        }

        return (
            <StoryWithCode code={burgerCode}>
                <Burger {...args} onToggle={handleToggle} />

                <div className={'rounded-2xl bg-header p-2'}>
                    <Burger {...args} onToggle={handleToggle} />
                </div>
            </StoryWithCode>
        )
    },
}

const burgerCode = `
<Burger 
    open={isOpen}
    onToggle={handleToggle}
/>

<div className={'bg-header rounded-2xl p-2'}>
    <Burger 
        open={isOpen}
        onToggle={handleToggle}
    />
</div>
`
