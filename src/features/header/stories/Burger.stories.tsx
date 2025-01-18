import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'
import { Burger } from '@/features/header/components/tools/Burger'
import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { useArgs } from '@storybook/core/preview-api'

const meta = {
    title: 'Features/Header',
    component: Burger,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: { type: 'boolean', },
            defaultValue: false,
        },
    },
    args: {
        onToggle: fn(),
    },
} satisfies Meta<typeof Burger>

export default meta

type Story = StoryObj<typeof meta>

const burgerCode = `
<Burger 
    open={isOpen}
    onToggle={handleToggle}
/>
`

export const BurgerStory: Story = {
    name: 'Burger',
    args: {
        open: false,
    },
    render: (args) => {
        const [{ open }, updateArgs] = useArgs<Story['args']>()

        const handleToggle = () => {
            updateArgs({
                open: !open,
            })

            if (args.onToggle) args.onToggle()
        }

        return (
            <StoryWithCode code={burgerCode}>
                <Burger {...args} onToggle={handleToggle}/>
            </StoryWithCode>
        )
    }
}