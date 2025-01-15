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
    outlined: 'btn-outline border-2',
    text: 'btn-outline border-none',
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
        outlined: 'text-blue-400 bg-transparent hover:bg-black hover:bg-opacity-10',
    },
    neutral: {
        text: 'btn-neutral',
        contained: 'btn-neutral',
        outlined: 'btn-neutral',
    },
    primary: {
        text: 'btn-primary',
        contained: 'btn-primary bg-primary',
        outlined: 'btn-primary',
    },
    secondary: {
        text: 'btn-secondary',
        contained: 'btn-secondary',
        outlined: 'btn-secondary',
    },
    accent: {
        text: 'btn-accent',
        contained: 'btn-accent',
        outlined: 'btn-accent',
    },
    ghost: {
        text: 'btn-ghost',
        contained: 'btn-ghost',
        outlined: 'btn-ghost',
    },
    link: {
        text: 'btn-link',
        contained: 'btn-link',
        outlined: 'btn-link',
    },
    info: {
        text: 'btn-info',
        contained: 'btn-info',
        outlined: 'btn-info',
    },
    success: {
        text: 'btn-success',
        contained: 'btn-success',
        outlined: 'btn-success',
    },
    warning: {
        text: 'btn-warning',
        contained: 'btn-warning',
        outlined: 'btn-warning',
    },
    error: {
        text: 'btn-error',
        contained: 'btn-error',
        outlined: 'btn-error',
    },
}
