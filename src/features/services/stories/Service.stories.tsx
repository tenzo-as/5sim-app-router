import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { Meta, StoryObj } from '@storybook/react'
import Service from '@/features/services/components/Service'

const meta = {
    title: 'Features/Services',
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
        <StoryWithCode className={'flex-col'} code={serviceCode}>
            <Service {...args} className={'w-[372px]'} />
            <Service
                {...args}
                priceFrom={undefined}
                count={undefined}
                className={'w-[372px]'}
            />
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
<Service
    isFavorite={true}
    id={'telegram'}
    locale={'en'}
/>
`
