import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { Meta, StoryObj } from '@storybook/react'
import { Banner } from '@/features/sidebar/components/Banner'

const meta = {
    title: 'Features/Sidebar',
    component: Banner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Banner>

export default meta

type Story = StoryObj<typeof meta>

export const BannerStory: Story = {
    name: 'Banner',
    args: {

    },
    render: args => (
        <StoryWithCode
            code={burgerCode}
            info={'В определенном брекпоинте, появляются кнопки'}
        >
            <Banner {...args} />
        </StoryWithCode>
    ),
}

const burgerCode = `
<Banner />
`
