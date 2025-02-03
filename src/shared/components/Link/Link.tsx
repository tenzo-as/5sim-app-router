import { Link as NextLink } from '@/i18n/routing'
import { Color, twColor, twUnderline, Underline } from '@/shared/components/Link/tw'
import { clsx } from 'clsx'
import { UrlObject } from 'node:url'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    href?: string | UrlObject
    children?: ReactNode
    openInNewTab?: boolean
    underline?: Underline
    color?: Color
}

export const Link = ({
    className,
    href,
    openInNewTab,
    underline = 'hover',
    color = 'primary',
    children,
}: Props) => {
    const Component = openInNewTab ? 'a' : NextLink

    return (
        <NextLink
            className={twMerge(clsx(twUnderline[underline], twColor[color]), className)}
            href={href || ''}
            target={openInNewTab ? '_blank' : undefined}
        >
            {children}
        </NextLink>
    )
}

const Component = {}
