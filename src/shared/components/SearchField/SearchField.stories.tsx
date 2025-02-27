import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { Meta, StoryObj } from '@storybook/react'
import SearchField from '@/shared/components/SearchField'
import { useArgs } from '@storybook/core/preview-api'
import { ChangeEvent } from 'react'

const meta = {
    title: 'Shared/SearchField',
    component: SearchField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: {
                type: 'text',
            },
        },
    },
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

export const SearchFieldStory: Story = {
    name: 'SearchField',
    args: {
        value: '',
        placeholder: 'Поиск..',
    },
    render: args => {
        const [{ }, updateArgs] = useArgs<Story['args']>()

        const handleChange = (_: ChangeEvent<HTMLInputElement>, value: string) => {
            updateArgs({
                value,
            })

            if (args.onChange) args.onChange(_, value)
        }

        const reset = () => {
            updateArgs({
                value: '',
            })
        }

        return (
            <StoryWithCode code={searchFieldCode(args.value, args.placeholder || '')}>
                <SearchField {...args} onChange={handleChange} reset={reset} className={'w-[372px]'} />
            </StoryWithCode>
        )
    },
}

const searchFieldCode = (value: string, placeholder: string) => `
<SearchField 
    value={'${value}'}
    placeholder={'${placeholder}'}
    
    onChange={(event, value) => {}}
/>
`
