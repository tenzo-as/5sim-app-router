import { CopyIcon } from '@/features/header/components/icons/CopyIcon'
import { ExitIcon } from '@/features/header/components/icons/ExitIcon'
import { KeyIcon } from '@/features/header/components/icons/KeyIcon'
import { MoneyIcon } from '@/features/header/components/icons/MoneyIcon'
import { PartnerIcon } from '@/features/header/components/icons/PartnerIcon'
import { ProfileIcon } from '@/features/header/components/icons/ProfileIcon'
import { SettingsIcon } from '@/features/header/components/icons/SettingsIcon'
import Button from '@/shared/components/Button'
import Divider from '@/shared/components/Divider'
import Menu from '@/shared/components/Menu'
import { useBoolean } from '@/shared/hooks/useBoolean'
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside'
import { clsx } from 'clsx'
import { useTranslations } from 'next-intl'
import { FC, useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    id: number
    slotProps?: {
        Menu: {
            className?: string
        }
    }
}

export const UserMenu = ({ id, className, slotProps }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const t = useTranslations()
    const isOpen = useBoolean()

    useOnClickOutside<HTMLDivElement>(ref, () => {
        isOpen.setFalse()
    })

    const topMenuItems = [
        { label: `ID: ${id}`, Icon: ProfileIcon, allowCopy: true },
        { label: t('header.partner'), Icon: PartnerIcon, IconClassName: '-translate-y-0.5' },
    ]
    const bottomMenuItems = [
        { label: t('header.topUpBalance'), Icon: MoneyIcon },
        { label: t('header.getApiKey'), Icon: KeyIcon },
        { label: t('header.settings'), Icon: SettingsIcon },
        { label: t('header.signOut'), Icon: ExitIcon },
    ]

    return (
        <div className={twMerge('relative', className)} ref={ref}>
            <Button
                color={'white'}
                variant={'text'}
                className={'px-3'}
                endIcon={<FaChevronDown className={'size-3'} />}
                onClick={isOpen.toggle}
            >
                <ProfileIcon />
            </Button>
            <Menu
                className={twMerge(
                    clsx(
                        'absolute right-0 top-[calc(100%_+_8px)] lg:right-0',
                        !isOpen.value && 'hidden',
                    ),
                    slotProps?.Menu?.className,
                )}
            >
                {topMenuItems.map(item => (
                    <MenuItem key={item.label} onCloseMenu={isOpen.setFalse} {...item} />
                ))}
                <Divider className={'-mx-2 my-2'} />
                {bottomMenuItems.map(item => (
                    <MenuItem key={item.label} onCloseMenu={isOpen.setFalse} {...item} />
                ))}
            </Menu>
        </div>
    )
}

type MenuItemProps = {
    Icon: FC<{ className?: string }>
    label: string
    allowCopy?: boolean
    onClick?: () => void
    onCloseMenu?: () => void
    IconClassName?: string
}

const MenuItem = ({
    onClick,
    Icon,
    IconClassName,
    label,
    allowCopy,
    onCloseMenu: closeMenu,
}: MenuItemProps) => (
    <Menu.Item
        onClick={() => {
            if (!allowCopy && closeMenu) closeMenu()

            if (onClick) onClick()
        }}
    >
        <div className={'[&:active_svg]:text-white [&_svg]:text-header dark:[&_svg]:text-gray-300'}>
            <div className={'flex size-6 items-center justify-center'}>
                <Icon className={IconClassName} />
            </div>
            {label}
            {allowCopy && <CopyIcon className={'size-5'} />}
        </div>
    </Menu.Item>
)
