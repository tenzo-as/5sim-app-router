import { Link as NextLink } from '@/i18n/routing'
import { UrlObject } from 'node:url'
import { ReactNode } from 'react'

type Props = {
    className?: string
    href?: string | UrlObject
    children?: ReactNode
}

export const Link = ({ className, href, children }: Props) => {
    return (
        <NextLink className={className} href={href || ''}>
            {children}
        </NextLink>
    )
}
