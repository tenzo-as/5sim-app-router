'use client'

import {
    type Color,
    Gap,
    type Size,
    type Variant,
    twColor,
    twEndGap,
    twFigure,
    twSize,
    twStartGap,
    twVariant,
} from '@/shared/components/Button/tw'
import Spinner from '@/shared/components/Spinner'
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
    loading?: boolean
    startGap?: Gap
    fullWidth?: boolean
    disableShadow?: boolean
    endGap?: Gap
    slotProps?: {
        startIconWrapperProps?: {
            className?: string
        }
    }
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
    loading,
    startGap = 8,
    endGap = 8,
    slotProps,
    fullWidth,
    disableShadow,
    href,
    openInNewTab,
    children,
}: Props) => {
    const handleClick: MouseEventHandler | undefined = event => {
        if (disabled) return

        if (type === 'submit') event.preventDefault()

        onClick?.(event)
    }

    const isFigure = circle || square

    const haveStartIcon = loading || typeof StartIcon !== 'undefined'
    const haveEndIcon = typeof EndIcon !== 'undefined'

    return (
        <Component
            type={type}
            className={twMerge(
                'btn min-h-[auto] flex-nowrap gap-0 rounded-xl text-base font-semibold leading-normal',
                twSize[size],
                twVariant[variant],
                twColor[color][variant],
                clsx(
                    square && `btn-square ${twFigure[size]}`,
                    circle && `btn-circle rounded-full ${twFigure[size]}`,
                ),
                fullWidth && 'w-full',
                disableShadow && 'shadow-none',
                className,
            )}
            onClick={typeof onClick === 'undefined' ? undefined : handleClick}
            disabled={disabled}
            href={href}
            target={openInNewTab ? '_blank' : undefined}
        >
            {haveStartIcon && (
                <span
                    className={twMerge(
                        twStartGap[startGap],
                        slotProps?.startIconWrapperProps?.className,
                    )}
                >
                    {loading ? (
                        <Spinner />
                    ) : typeof StartIcon === 'function' ? (
                        <StartIcon className={'h-6 w-6'} />
                    ) : (
                        StartIcon
                    )}
                </span>
            )}
            {isFigure ? !loading && children : children}
            {haveEndIcon && (
                <span className={twEndGap[endGap]}>
                    {typeof EndIcon === 'function' ? (
                        <EndIcon className={clsx('h-6 w-6', twEndGap[endGap])} />
                    ) : (
                        EndIcon
                    )}
                </span>
            )}
        </Component>
    )
}

type ComponentProps = LinkComponent | NotLinkComponent

type LinkComponent = {
    component?: 'a'
    href?: string
    openInNewTab?: boolean
}

type NotLinkComponent = {
    component?: 'button' | 'div'
    href?: never
    openInNewTab?: never
}

type FigureProps = Circle | Square

type Circle = { circle?: boolean; square?: undefined }
type Square = { square?: boolean; circle?: undefined }

type Icon = ReactNode | ((props: { className: string }) => ReactNode)
