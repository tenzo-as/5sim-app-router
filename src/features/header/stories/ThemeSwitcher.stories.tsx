import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from '@/features/header/components/tools/ThemeSwitcher'
import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { useArgs } from '@storybook/core/preview-api'

const meta = {
    title: 'Features/Header/Tools',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isLight: {
            control: { type: 'boolean', },
        },
    },
    args: {
        onToggle: fn(),
    },
} satisfies Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const ThemeSwitcherStory: Story = {
    name: 'ThemeSwitcher',
    args: {
        isLight: false,
    },
    render: (args) => {
        const [{ isLight }, updateArgs] = useArgs<Story['args']>()

        const handleToggle = () => {
            updateArgs({
                isLight: !isLight,
            })

            if (args.onToggle) args.onToggle()
        }

        return (
            <StoryWithCode code={ThemeSwitcherCode} light={isLight}>
                <ThemeSwitcher {...args} onToggle={handleToggle} />

                <div className={'bg-header rounded-2xl p-2'}>
                    <ThemeSwitcher {...args} onToggle={handleToggle} />
                </div>
            </StoryWithCode>
        )
    }
}

const ThemeSwitcherCode = `
<ThemeSwitcher isLight={true} />

<div className={'bg-header rounded-2xl p-2'}>
    <ThemeSwitcher isLight={false} />
</div>
`