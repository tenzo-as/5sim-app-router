import { Link as NextLink } from '@/i18n/routing'
import { UrlObject } from 'node:url'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import { Color, twUnderline, Underline } from '@/shared/components/Link/tw'

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
    children,
}: Props) => {
    const Component = openInNewTab ? 'a' : NextLink

    return (
        <NextLink
            className={twMerge(
                clsx(
                    twUnderline[underline],
                ),
                className,
            )}
            href={href || ''}
            target={openInNewTab ? '_blank' : undefined}
        >
            {children}
        </NextLink>
    )
}

const Component = {

}