'use client'

import { ReactNode, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { useBoolean } from '@/shared/hooks/useBoolean'

type Props = {
    children: ReactNode
    code: string,
    className?: string,
}

const StoryWithCode = ({ children, code, className }: Props) => {
    const isLight = useBoolean()

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isLight.value ? 'light' : 'dark')
    }, [isLight.value])

    return (
        <div className='bg-base-300 relative p-4 border-2 border-gray-600 dark:border-white rounded-2xl'>
            <div className={twMerge('mb-4 flex flex-wrap gap-4 items-center justify-center', className)}>{children}</div>
            <pre className='bg-base-100 p-4 rounded-2xl text-sm overflow-x-auto'>
                <code>{code.trim()}</code>
            </pre>

            <label className="absolute right-0 -top-16 grid cursor-pointer place-items-center">
                <input
                    type="checkbox"
                    value="synthwave"
                    onChange={(event) => isLight.setValue(event.currentTarget.checked)}
                    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                <svg
                    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path
                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </label>
        </div>
    )
}

export default StoryWithCode

