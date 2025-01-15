import Button from '@/shared/components/Button'
import { Color, Size, Variant } from '@/shared/components/Button/tw'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import StoryWithCode from '@/features/stories/components/StoryWithCode'
import { capitalize } from '@/shared/utils/capitalize'
import exp from 'node:constants'
import { Burger } from '@/features/header/components/tools/Burger'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import { useBoolean } from '@/shared/hooks/useBoolean'

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
            options: [
                'white',
                'neutral',
                'primary',
                'secondary',
                'accent',
                'ghost',
                'link',
                'info',
                'success',
                'warning',
                'error',
            ],
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
        className: { table: { disable: true } },
        type: { table: { disable: true } },
        component: { table: { disable: true } },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        children: 'Click me'
    }
}

const variants: Variant[] = ['contained', 'outlined', 'text']

const variantsCode = variants.map(variant =>
    `<Button variant={'${variant}'}>${capitalize(variant)}</Button>`
).join('\n')

export const Variants: Story = {
    render: (args) => (
        <div className={'flex gap-4'}>
            <StoryWithCode code={variantsCode}>
                {variants.map(variant =>
                    <Button
                        {...args}
                        key={variant}
                        variant={variant}
                    >
                        {capitalize(variant)}
                    </Button>
                )}
            </StoryWithCode>
        </div>
    ),
    argTypes: {
        variant: { table: { disable: true } },
        children: { table: { disable: true } },
        square: { table: { disable: true } },
        circle: { table: { disable: true } },
    },
}


const sizes: Size[] = [32, 40, 42, 48]

const sizesCode = sizes.map(size =>
    `<Button size={${size}}>Размер - ${size}px</Button>`
).join('\n')

export const Sizes: Story = {
    render: (args) => (
        <div className={'flex gap-4'}>
            <StoryWithCode code={sizesCode}>
                {sizes.map(size =>
                    <Button
                        {...args}
                        key={size}
                        size={size}
                    >
                        Размер - {size}px
                    </Button>
                )}
            </StoryWithCode>
        </div>
    ),
    argTypes: {
        size: { table: { disable: true } },
        children: { table: { disable: true } },
        square: { table: { disable: true } },
        circle: { table: { disable: true } },
    },
}


const colors: Color[] = ['white', 'neutral', 'primary', 'secondary', 'accent', 'ghost', 'link', 'info', 'success', 'warning', 'error']

const colorsCode = colors.map(color =>
    `<Button color={'${color}'}>${capitalize(color)}</Button>`
).join('\n')

export const Colors: Story = {
    render: (args) => (
        <div className={'flex gap-4'}>
            <StoryWithCode code={colorsCode}>
                {colors.map(color =>
                    <Button
                        {...args}
                        key={color}
                        color={color}
                    >
                        {capitalize(color)}
                    </Button>
                )}
            </StoryWithCode>
        </div>
    ),
    argTypes: {
        color: { table: { disable: true } },
        children: { table: { disable: true } },
        square: { table: { disable: true } },
        circle: { table: { disable: true } },
    },
}

export const Square: Story = {
    render: args => {
        const isOpen = useBoolean()
        const base = 'w-[18px] h-[2px] bg-white rounded-[1px] transition-all duration-300'

        return (
            <Button
                square
                variant={'text'}
                size={48}
                className={'flex flex-col items-center justify-center'}
            >
                <div className={twMerge(base, clsx(isOpen.value && 'rotate-45 translate-y-[5px]'))} />
                <div className={twMerge(base, 'my-[3px]', clsx(isOpen.value && 'w-0'))} />
                <div className={twMerge(base, clsx(isOpen.value && '-rotate-45 -translate-y-[5px]'))} />
            </Button>
        )
    }
}