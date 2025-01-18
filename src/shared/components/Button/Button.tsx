'use client'
import {
    type Color,
    type Size,
    type Variant,
    twColor,
    twSize,
    twVariant,
    twFigure,
} from '@/shared/components/Button/tw'
import { clsx } from 'clsx'
import type { MouseEventHandler, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    type?: 'button' | 'submit'
    className?: string
    size?: Size
    variant?: Variant
    color?: Color
    onClick?: MouseEventHandler
    disabled?: boolean
    startIcon?: Icon
    endIcon?: Icon
    children?: ReactNode
} & FigureProps &
    ComponentProps

export const Button = ({
    type,
    className,
    size = 40,
    onClick,
    component: Component = 'button',
    disabled,
    variant = 'contained',
    square,
    circle,
    color = 'primary',
    startIcon: StartIcon,
    endIcon: EndIcon,
    children,
}: Props) => {
    const handleClick: MouseEventHandler | undefined = event => {
        if (disabled) return

        if (type === 'submit') event.preventDefault()

        onClick?.(event)
    }

    return (
        <Component
            type={type}
            className={twMerge(
                'btn min-h-[auto] rounded-xl text-base font-semibold leading-normal gap-0',
                twSize[size],
                twVariant[variant],
                twColor[color][variant],
                clsx(
                    square && `btn-square ${twFigure[size]}`,
                    circle && `btn-circle rounded-full ${twFigure[size]}`
                ),
                className,
            )}
            onClick={typeof onClick === 'undefined' ? undefined : handleClick}
            disabled={disabled}
        >
            {typeof StartIcon === 'function' ? <StartIcon className={'h-6 w-6'} /> : StartIcon}
            {children}
            {typeof EndIcon === 'function' ? <EndIcon className={'h-6 w-6'} /> : EndIcon}
        </Component>
    )
}

type ComponentProps = LinkComponent | NotLinkComponent

type LinkComponent = {
    component?: 'a'
    href?: string
}

type NotLinkComponent = {
    component?: 'button' | 'div'
    href?: undefined
}

type FigureProps = Circle | Square

type Circle = { circle?: boolean; square?: undefined }
type Square = { square?: boolean; circle?: undefined }

type Icon = ReactNode | ((props: { className: string }) => ReactNode)
