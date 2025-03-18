import Button from '@/shared/components/Button'
import { useTranslations } from 'next-intl'
import Menu from '@/shared/components/Menu'
import { useBoolean } from '@/shared/hooks/useBoolean'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import { FaChevronDown } from 'react-icons/fa'
import { MdFilterList } from 'react-icons/md'
import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside'
import { useRef } from 'react'

type Props = {
    className?: string
    sortBy: SortBy
    onSortChange: (sortBy: SortBy) => void
}

const CountriesSortMenu = ({ sortBy, onSortChange, className }: Props) => {
    const t = useTranslations('countries')

    const isOpen = useBoolean()

    const ref = useRef<HTMLDivElement>(null)

    useOnClickOutside(ref, isOpen.setFalse)

    return (
        <div
            className={twMerge('relative', className)}
            ref={ref}
        >
            <Button
                variant={'text'}
                color={'primary'}
                startIcon={<MdFilterList className={'text-[#395372]'} />}
                startGap={8}
                endIcon={
                    <FaChevronDown
                        className={clsx(
                            'transition-transform translate-y-px duration-200 text-sm',
                            isOpen.value && 'rotate-x-180',
                        )}
                    />
                }
                onClick={isOpen.toggle}
                fullWidth
                disableShadow
                className={'text-base font-normal justify-start'}
            >
                {t(`sortBy.${sortBy}`)}
            </Button>
            <Menu
                className={'absolute left-6 top-[calc(100%_+_8px)]'}
                isOpen={isOpen.value}
            >
                {sortModes.map(sortMode =>
                    <Menu.Item key={sortMode}>
                        <div
                            className={clsx(sortMode === sortBy && 'active', 'text-base')}
                            onClick={() => onSortChange?.(sortMode)}
                        >
                            {t(`sortBy.${sortMode}`)}
                        </div>
                    </Menu.Item>
                )}
            </Menu>
        </div>
    )
}

export default CountriesSortMenu

export enum SortBy {
    Popularity = 'popularity',
    Name = 'name',
    Price = 'price',
    Quantity = 'quantity',
}

const sortModes: SortBy[] = [SortBy.Popularity, SortBy.Name, SortBy.Price, SortBy.Quantity]
