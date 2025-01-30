import { Meta, StoryObj } from '@storybook/react'
import { MobileMenu } from '@/features/header/components/MobileMenu'
import StoryWithCode from '@/features/stories/components/StoryWithCode'

const meta = {
    title: 'Features/Header',
    component: MobileMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof MobileMenu>

export default meta

type Story = StoryObj<typeof meta>

export const MobileMenuStory: Story = {
    name: 'MobileMenu',
    args: { },
    render: (args) =>  (
        <StoryWithCode code={burgerCode}>
            <MobileMenu {...args} />
        </StoryWithCode>
)
}

const burgerCode = `
className={'absolute top-14 left-0 bottom-0'}

<MobileMenu />
`
