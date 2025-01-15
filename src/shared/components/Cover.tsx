import Button from '@/shared/components/Button'
import { FaTelegram } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

const Cover = ({ className }: Props) => {
    return (
        <div
            className={twMerge(
                'flex h-[88px] w-full items-center rounded-b-2xl bg-[#1976d2] px-4 sm:px-6 lg:max-xl:p-[0_80px_0_56px] 2xl:rounded-tr-3xl',
                className,
            )}
            // onClick={() => navigate(Pathname.Home)}
        >
            <img className={'h-10 w-[66px]'} src={'/media/logos/5sim.svg'} alt={'5SIM Logo'} />
            <h2
                className={
                    'ml-6 text-[17px] font-semibold text-white min-[338px]:text-[18px] min-[360px]:text-xl [&>span]:block'
                }
            >
                <span>Виртуальные номера</span>
                <span className={'text-base'}>для приема СМС</span>
            </h2>
            <div className={'ml-auto hidden gap-5 md:flex xl:hidden'}>
                {['Новые номера', 'Новости, акции'].map(text => (
                    <Button
                        color={'white'}
                        startIcon={<FaTelegram className={'size-6'} />}
                        key={text}
                    >
                        {text}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Cover
