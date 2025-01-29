'use client'

import {
    type Color,
    type Size,
    type Variant,
    twColor,
    twSize,
    twVariant,
    twFigure, twStartGap, Gap, twEndGap,
} from '@/shared/components/Button/tw'
import { clsx } from 'clsx'
import type { MouseEventHandler, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Spinner from '@/shared/components/Spinner'

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
    endGap?: Gap
    slotProps?: {
        startIconWrapperProps?: {
            className?: string
        },
    },
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
                'btn min-h-[auto] rounded-xl text-base font-semibold leading-normal gap-0 flex-nowrap',
                twSize[size],
                twVariant[variant],
                twColor[color][variant],
                clsx(
                    square && `btn-square ${twFigure[size]}`,
                    circle && `btn-circle rounded-full ${twFigure[size]}`,
                ),
                className,
            )}
            onClick={typeof onClick === 'undefined' ? undefined : handleClick}
            disabled={disabled}
        >
            {haveStartIcon &&
                <span
                    className={twMerge(
                        twStartGap[startGap],
                        slotProps?.startIconWrapperProps?.className,
                    )}
                >
                    {loading
                        ? <Spinner />
                        : typeof StartIcon === 'function'
                            ? <StartIcon className={'h-6 w-6'} />
                            : StartIcon
                    }
                </span>
            }
            {isFigure
                ? !loading && children
                : children
            }
            {haveEndIcon &&
                <span className={twEndGap[endGap]}>
                    {typeof EndIcon === 'function'
                        ? <EndIcon className={clsx('h-6 w-6', twEndGap[endGap])} />
                        : EndIcon
                    }
                </span>
            }
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

