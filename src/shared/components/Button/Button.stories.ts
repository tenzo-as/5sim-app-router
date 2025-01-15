import Button from '@/shared/components/Button'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Color, Size, Variant } from '@/shared/components/Button/tw'

const meta = {
    title: 'Shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['contained', 'outlined', 'text'],
        },
        size: {
            control: { type: 'select' },
            options: [32, 40, 42, 48],
        },
        color: {
            control: { type: 'select' },
            options: ['white', 'neutral', 'primary', 'secondary', 'accent', 'ghost', 'link', 'info', 'success', 'warning', 'error',],
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        square: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        circle: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        children: {
            control: { type: 'text' },
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const getVariantStory = (variant: Variant): Story => ({
    args: {
        variant,
        children: variant.toUpperCase(),
    },
})

export const Contained = getVariantStory('contained')
export const Outlined = getVariantStory('outlined')
export const Text = getVariantStory('text')

const getSizeStory = (size: Size): Story => ({
    args: {
        size,
        children: `Размер ${size}px`,
    },
})

export const ButtonSize32 = getSizeStory(32)
export const ButtonSize40 = getSizeStory(40)
export const ButtonSize42 = getSizeStory(42)
export const ButtonSize48 = getSizeStory(48)

const getColorStory = (color: Color): Story => ({
    args: {
        color,
        children: `Палитра - ${color}`,
    },
})

export const Primary = getColorStory('primary')
export const Secondary = getColorStory('secondary')
export const Info = getColorStory('info')
export const Accent = getColorStory('accent')
export const Ghost = getColorStory('ghost')
export const Neutral = getColorStory('neutral')
export const Error = getColorStory('error')
export const Success = getColorStory('success')
export const Warning = getColorStory('warning')
export const White = getColorStory('white')
export const Link = getColorStory('link')