import Button from '@/shared/components/Button'
import { FC, ReactNode } from 'react'
import { InstagramIcon } from '@/shared/icons/social/InstagramIcon'
import { VKontakteIcon } from '@/shared/icons/social/VKontakteIcon'
import { YouTubeIcon } from '@/shared/icons/social/YouTubeIcon'
import { FacebookIcon } from '@/shared/icons/social/FacebookIcon'
import { TwitterIcon } from '@/shared/icons/social/TwitterIcon'

type Props = { className?: string }

type SocialName = 'Instagram'| 'VKontakte'| 'YouTube'| 'Facebook'| 'Twitter'

const SocialButton: Record<SocialName, FC<Props>> = {
    Instagram: props => (
        <BaseButton {...props}>
            <InstagramIcon />
        </BaseButton>
    ),
    VKontakte: props => (
        <BaseButton {...props}>
            <VKontakteIcon />
        </BaseButton>
    ),
    YouTube: props => (
        <BaseButton {...props}>
            <YouTubeIcon />
        </BaseButton>
    ),
    Facebook: props => (
        <BaseButton {...props}>
            <FacebookIcon />
        </BaseButton>
    ),
    Twitter: props => (
        <BaseButton {...props}>
            <TwitterIcon />
        </BaseButton>
    ),
}

export default SocialButton

type BaseButtonProps = {
    className?: string
    children?: ReactNode
}

const BaseButton = ({
    className,
    children,
}: BaseButtonProps) => (
    <Button
        size={40}
        variant={'contained'}
        circle
        className={className}
    >
        {children}
    </Button>
)