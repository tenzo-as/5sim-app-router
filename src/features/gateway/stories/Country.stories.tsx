import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { Meta, StoryObj } from '@storybook/react'
import { Country } from '@/features/gateway/components/directions/Country'

const meta = {
    title: 'Features/Gateway',
    component: Country,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Country>

export default meta

type Story = StoryObj<typeof meta>

export const CountryStory: Story = {
    name: 'Country',
    args: {
        isFavorite: true,
        id: 'russia',
        locale: 'en',
        count: 212,
        priceFrom: 13,
    },
    render: args => (
        <StoryWithCode code={CountryCode} className={'flex-col'}>
            <Country {...args} className={'w-[372px]'} />
            <Country {...args} count={undefined} priceFrom={undefined} className={'w-[372px]'} />
        </StoryWithCode>
    ),
}

const CountryCode = `
<Country 
    isFavorite={true}
    id={'russia'}
    locale={'en'}
    count={212}
    priceFrom={13}
/>

<Country 
    isFavorite={true}
    id={'russia'}
    locale={'en'}
/>
`
