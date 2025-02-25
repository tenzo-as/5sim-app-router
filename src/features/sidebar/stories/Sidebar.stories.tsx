import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { Meta, StoryObj } from '@storybook/react'
import Sidebar from '@/features/sidebar/components/Sidebar'

const meta = {
    title: 'Features/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const SidebarStory: Story = {
    name: 'Sidebar',
    args: {

    },
    render: args => (
        <StoryWithCode
            code={burgerCode}
        >
            <Sidebar {...args} />
        </StoryWithCode>
    ),
}

const burgerCode = `
<Sidebar />
`
