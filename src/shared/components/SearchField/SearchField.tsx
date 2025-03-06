import { ChangeEvent, ChangeEventHandler } from 'react'
import { twMerge } from 'tailwind-merge'
import { IoMdSearch } from 'react-icons/io'
import { IoCloseCircle } from 'react-icons/io5'

type Props = {
    value: string
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void
    reset?: () => void
    className?: string
    placeholder?: string
}

export const SearchField = ({
    value,
    onChange,
    reset,
    placeholder,
    className,
}: Props) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.currentTarget.value

        if (onChange) onChange(event, value)
    }

    return (
        <label
            className={twMerge(
                'flex items-center rounded-3xl bg-white dark:bg-[#1e3044] pl-3 pr-[14px] h-12',
                'border-2 border-solid border-[#42a5f5] hover:border-[#1976d2]',
                className,
            )}
        >
            <div className={'flex items-center justify-center text-2xl size-8 bg-[#e2f1fd] dark:bg-[#2a3e52] rounded-xl text-[#1976d2] dark:text-[#42a5f5] mr-2 cursor-pointer'}>
                <IoMdSearch />
            </div>
            <input
                className={'text-base grow bg-transparent outline-none'}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
            {value &&
                <IoCloseCircle
                    className={'ml-2 text-2xl text-[#757575] dark:text-[#888887] cursor-pointer'}
                    onClick={reset}
                />
            }
        </label>
    )
}
