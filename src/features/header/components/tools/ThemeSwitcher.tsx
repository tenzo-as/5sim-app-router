import Button from '@/shared/components/Button'
import { DarkThemeIcon } from '@/features/header/components/icons/DarkThemeIcon'
import { LightThemeIcon } from '@/features/header/components/icons/LightThemeIcon'
import { twMerge } from 'tailwind-merge'

type Props = {
    isLight: boolean,
    onToggle?: () => void,
    className?: string
}

export const ThemeSwitcher = ({ isLight, onToggle, className }: Props) => {
    return (
        <Button
            onClick={onToggle}
            color={'white'}
            variant={'text'}
            circle
            className={twMerge('swap swap-rotate', className)}
        >
            <LightThemeIcon className={isLight ? 'swap-on' : 'swap-off'}/>
            <DarkThemeIcon className={isLight ? 'swap-off' : 'swap-on'}/>
        </Button>
    )
}
