import { twMerge } from 'tailwind-merge'

export type Size = 32 | 40 | 42 | 48
export const twSize: Record<Size, string> = {
    32: 'h-[32px] text-sm',
    40: 'h-[40px] text-[15px]',
    42: 'h-[42px]',
    48: 'h-[48px]',
}
export const twFigure: Record<Size, string> = {
    32: 'w-[32px] p-0',
    40: 'w-[40px] p-0',
    42: 'w-[42px] p-0',
    48: 'w-[48px] p-0',
}

export type Variant = 'contained' | 'outlined' | 'text'
export const twVariant: Record<Variant, string> = {
    contained: 'border-none',
    outlined: 'border-2 bg-transparent hover:bg-opacity-0 hover:bg-black',
    text: 'border-none bg-transparent bg-opacity-20 hover:bg-black',
}

export type Color =
    | 'white'
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
export const twColor: Record<Color, Record<Variant, string>> = {
    white: {
        text: 'text-white bg-transparent hover:bg-black hover:bg-opacity-10',
        contained: 'text-blue-400 bg-white hover:bg-gray-200',
        outlined: 'text-blue-400',
    },
    neutral: {
        contained: 'btn-neutral',
        outlined: 'btn-neutral text-neutral hover:text-neutral-hover border-neutral hover:border-neutral-hover',
        text: 'btn-neutral',
    },
    primary: {
        contained: 'btn-primary bg-primary',
        outlined: 'btn-primary text-primary hover:text-primary-hover border-primary hover:border-primary-hover',
        text: 'btn-primary',
    },
    secondary: {
        contained: 'btn-secondary',
        outlined: 'btn-secondary text-secondary hover:text-secondary-hover border-secondary hover:border-secondary-hover',
        text: 'btn-secondary',
    },
    accent: {
        contained: 'btn-accent',
        outlined: 'btn-accent text-accent hover:text-accent-hover border-accent hover:border-accent-hover',
        text: 'btn-accent',
    },
    ghost: {
        contained: 'btn-ghost',
        outlined: 'btn-ghost text-ghost hover:text-ghost-hover border-ghost hover:border-ghost-hover',
        text: 'btn-ghost',
    },
    link: {
        contained: 'btn-link',
        outlined: 'btn-link text-link hover:text-link-hover border-link hover:border-link-hover',
        text: 'btn-link',
    },
    info: {
        contained: 'btn-info',
        outlined: 'btn-info text-info hover:text-info-hover border-info hover:border-info-hover',
        text: 'btn-info',
    },
    success: {
        contained: 'btn-success',
        outlined: 'btn-success text-success hover:text-success-hover border-success hover:border-success-hover',
        text: 'btn-success',
    },
    warning: {
        contained: 'btn-warning',
        outlined: 'btn-warning text-warning hover:text-warning-hover border-warning hover:border-warning-hover',
        text: 'btn-warning',
    },
    error: {
        contained: 'btn-error',
        outlined: 'btn-error text-error hover:text-error-hover border-error hover:border-error-hover',
        text: 'btn-error',
    },
}
