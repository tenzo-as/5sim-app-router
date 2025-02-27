'use client'

import { useBoolean } from '@/shared/hooks/useBoolean'
import { ReactNode, useEffect, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    children: ReactNode
    code: string
    className?: string
    light?: boolean
    info?: ReactNode
}

const StoryWithCode = ({ children, code, className, light, info }: Props) => {
    const isLight = useBoolean()

    const theme = useMemo(() => {
        const isControlled = typeof light === 'boolean'

        const value = isControlled ? light : isLight.value

        return value ? 'light' : 'dark'
    }, [isLight.value, light])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className='relative'>
            {info && (
                <span
                    className={
                        'mb-4 inline-flex justify-center text-wrap rounded-2xl bg-orange-500 px-6 py-2 font-semibold text-white'
                    }
                >
                    {info}
                </span>
            )}

            <div className={'mockup-window relative overflow-visible border bg-base-300'}>
                <div
                    className={twMerge(
                        'flex flex-wrap justify-center gap-4 rounded-b-2xl bg-base-200 px-4 py-12',
                        className,
                    )}
                >
                    {children}
                </div>

                <label className='absolute right-3 top-3 grid cursor-pointer place-items-center'>
                    <input
                        type='checkbox'
                        checked={theme === 'light'}
                        onChange={event => isLight.setValue(event.currentTarget.checked)}
                        className='theme-controller toggle col-span-2 col-start-1 row-start-1 bg-base-content'
                    />
                    <svg
                        className='col-start-1 row-start-1 fill-base-100 stroke-base-100'
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <circle cx='12' cy='12' r='5' />
                        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                    </svg>
                    <svg
                        className='col-start-2 row-start-1 fill-base-100 stroke-base-100'
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                    </svg>
                </label>
            </div>

            <div className={'mockup-code mt-4'}>
                <pre className={'px-5 before:hidden'}>
                    <code>{code.trim()}</code>
                </pre>
            </div>
        </div>
    )
}

export default StoryWithCode
