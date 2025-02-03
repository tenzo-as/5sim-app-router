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

export type Gap = 'none' | 4 | 8
export const twStartGap: Record<Gap, string> = {
    none: 'mr-none',
    4: 'mr-1',
    8: 'mr-2',
}
export const twEndGap: Record<Gap, string> = {
    none: 'ml-none',
    4: 'ml-1',
    8: 'ml-2',
}

export type Variant = 'contained' | 'outlined' | 'text'
export const twVariant: Record<Variant, string> = {
    contained: 'border-none',
    outlined: 'bg-transparent hover:bg-opacity-20 hover:bg-gray-900',
    text: 'border-none bg-transparent hover:bg-opacity-20 hover:bg-gray-900',
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
        contained: 'text-blue-400 bg-white hover:bg-gray-200',
        outlined: 'text-white bg-transparent border-white border-solid hover:border-white',
        text: 'text-white',
    },
    neutral: {
        contained: 'btn-neutral',
        outlined: 'btn-neutral text-neutral border-neutral',
        text: 'btn-neutral text-neutral',
    },
    primary: {
        contained: 'btn-primary bg-primary',
        outlined: 'btn-primary text-primary border-primary',
        text: 'btn-primary text-primary',
    },
    secondary: {
        contained: 'btn-secondary',
        outlined: 'btn-secondary text-secondary border-secondary',
        text: 'btn-secondary text-secondary',
    },
    accent: {
        contained: 'btn-accent',
        outlined: 'btn-accent text-accent border-accent',
        text: 'btn-accent text-accent',
    },
    ghost: {
        contained: 'btn-ghost',
        outlined: 'btn-ghost text-ghost border-ghost',
        text: 'btn-ghost text-ghost',
    },
    link: {
        contained: 'btn-link',
        outlined: 'btn-link text-link border-link',
        text: 'btn-link text-link',
    },
    info: {
        contained: 'btn-info',
        outlined: 'btn-info text-info border-info',
        text: 'btn-info text-info',
    },
    success: {
        contained: 'btn-success',
        outlined: 'btn-success text-success border-success',
        text: 'btn-success text-success',
    },
    warning: {
        contained: 'btn-warning',
        outlined: 'btn-warning text-warning border-warning',
        text: 'btn-warning text-warning',
    },
    error: {
        contained: 'btn-error',
        outlined: 'btn-error text-error border-error',
        text: 'btn-error text-error',
    },
}
