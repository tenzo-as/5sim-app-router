import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { Meta, StoryObj } from '@storybook/react'
import { Service } from '@/features/gateway/components/directions/Service'

const meta = {
    title: 'Features/Gateway',
    component: Service,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Service>

export default meta

type Story = StoryObj<typeof meta>

export const ServiceStory: Story = {
    name: 'Service',
    args: {
        isFavorite: true,
        id: 'telegram',
        locale: 'en',
        count: 212,
        priceFrom: 13,
    },
    render: args => (
        <StoryWithCode code={serviceCode}>
            <Service {...args} className={'w-[372px]'} />
        </StoryWithCode>
    ),
}

const serviceCode = `
<Service 
    isFavorite={true}
    id={'telegram'}
    locale={'en'}
    count={212}
    priceFrom={13}
/>
`
