'use client'
import Button from '@/shared/components/Button'
import { useTranslations } from 'next-intl'

const Home = () => {
    const t = useTranslations('HomePage')

    return (
        <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20'>
            <main className='row-start-2 flex flex-col items-center gap-8 sm:items-start'>
                <img
                    className='dark:invert'
                    src='/next.svg'
                    alt='Next.js logo'
                    width={180}
                    height={38}
                    // priority
                />
                <ol className='list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left'>
                    <li className='mb-2'>
                        Get started by editing{' '}
                        <code className='rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]'>
                            src/app/page.tsx
                        </code>
                        .
                    </li>
                    <li className={'border-2 border-solid border-blue-500 dark:border-red-500'}>
                        Save and see your changes instantly.
                    </li>
                    {t('title')}
                </ol>

                <div className={'flex gap-2'}>
                    <div className={'size-8 bg-primary'}></div>
                    <div className={'size-8 bg-primary-content'}></div>
                    <div className={'size-8 bg-primary-hover hover:bg-primary-hover'}></div>
                    <div className={'size-8 bg-primary-focus hover:bg-primary-focus'}></div>
                    <div className={'size-8 bg-primary-active hover:bg-primary-active'}></div>
                    <div className={'size-8 bg-primary-accent hover:bg-primary-accent'}></div>
                </div>

                <div className='flex flex-col items-center gap-4 sm:flex-row'>
                    <a
                        className='bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm transition-colors hover:bg-[#383838] sm:h-12 sm:px-5 sm:text-base dark:hover:bg-[#ccc]'
                        href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='dark:invert'
                            src='/vercel.svg'
                            alt='Vercel logomark'
                            width={20}
                            height={20}
                        />
                        Deploy now
                    </a>
                    <Button
                    // className='flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]'
                    >
                        Read our docs
                    </Button>
                </div>
            </main>
            <footer className='row-start-3 flex flex-wrap items-center justify-center gap-6'>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img aria-hidden src='/file.svg' alt='File icon' width={16} height={16} />
                    Learn
                </a>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img aria-hidden src='/window.svg' alt='Window icon' width={16} height={16} />
                    Examples
                </a>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    )
}

export default Home