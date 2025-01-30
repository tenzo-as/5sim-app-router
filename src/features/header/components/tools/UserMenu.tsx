import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import Button from '@/shared/components/Button'
import { FaChevronDown } from 'react-icons/fa'
import Menu from '@/shared/components/Menu'
import { clsx } from 'clsx'
import { FC, useRef } from 'react'
import { useBoolean } from '@/shared/hooks/useBoolean'
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside'
import { ProfileIcon } from '@/features/header/components/icons/ProfileIcon'
import { PartnerIcon } from '@/features/header/components/icons/PartnerIcon'
import Divider from '@/shared/components/Divider'
import { MoneyIcon } from '@/features/header/components/icons/MoneyIcon'
import { KeyIcon } from '@/features/header/components/icons/KeyIcon'
import { SettingsIcon } from '@/features/header/components/icons/SettingsIcon'
import { ExitIcon } from '@/features/header/components/icons/ExitIcon'
import { CopyIcon } from '@/features/header/components/icons/CopyIcon'

type Props = {
    className?: string
    id: number
}

export const UserMenu = ({ id, className }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const t = useTranslations()
    const isOpen = useBoolean()

    useOnClickOutside<HTMLDivElement>(ref, () => {
        isOpen.setFalse()
    })

    const topMenuItems = [
        { label: `ID: ${id}`, icon: ProfileIcon, allowCopy: true },
        { label: t('header.partner'), icon: PartnerIcon },
    ]
    const bottomMenuItems = [
        { label: t('header.topUpBalance'), icon: MoneyIcon },
        { label: t('header.getApiKey'), icon: KeyIcon },
        { label: t('header.settings'), icon: SettingsIcon },
        { label: t('header.signOut'), icon: ExitIcon },
    ]

    return (
        <div
            className={twMerge('relative', className)}
            ref={ref}
        >
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
                className={clsx(
                    'absolute right-0 top-[calc(100%_+_8px)] lg:right-0',
                    !isOpen.value && 'hidden',
                )}
            >
                {topMenuItems.map(item =>
                    <MenuItem key={item.label} onCloseMenu={isOpen.setFalse} {...item} />
                )}
                <Divider className={'my-2 -mx-2'}/>
                {bottomMenuItems.map(item =>
                    <MenuItem key={item.label} onCloseMenu={isOpen.setFalse} {...item} />
                )}
            </Menu>
        </div>
    )
}

type MenuItemProps = {
    icon: FC
    label: string
    allowCopy?: boolean
    onClick?: () => void
    onCloseMenu?: () => void
}

const MenuItem = ({ onClick, icon: Icon, label, allowCopy, onCloseMenu: closeMenu }: MenuItemProps) => (
    <Menu.Item
        onClick={() => {
            if (!allowCopy && closeMenu) closeMenu()

            if (onClick) onClick()
        }}
    >
        <div>
            <div className={'flex items-center justify-center size-6 color-header'}>
                <Icon />
            </div>
            {label}
            {allowCopy &&
                <CopyIcon className={'size-5'} />
            }
        </div>
    </Menu.Item>
)