export type Underline = 'always' | 'hover' | 'none'
export const twUnderline: Record<Underline, string> = {
    always: 'underline',
    hover: 'no-underline hover:underline',
    none: 'no-underline',
}

export type Color = 'inherit' | 'primary'
export const twColor: Record<Color, string> = {
    primary: 'text-blue-400 hover:text-blue-500',
    inherit: 'text-inherit',
}
