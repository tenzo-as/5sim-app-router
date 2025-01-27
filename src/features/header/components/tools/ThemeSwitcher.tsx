import Button from '@/shared/components/Button'
import DarkThemeIcon from '@/features/header/components/icons/DarkThemeIcon'
import { clsx } from 'clsx'
import LightThemeIcon from '@/features/header/components/icons/LightThemeIcon'

type Props = {
    isLight: boolean,
    onToggle?: () => void,
}

export const ThemeSwitcher = ({ isLight, onToggle }: Props) => {
    return (
        <Button
            onClick={onToggle}
            color={'white'}
            variant={'text'}
            circle
        >
            <LightThemeIcon className={clsx(isLight && 'hidden')}/>
            <DarkThemeIcon className={clsx(!isLight && 'hidden')}/>
        </Button>
    )
}